import { Fragment, useState,useRef, useEffect } from "react"
import HighlightHistory from "../components/HighlightHistory"
import { Icons } from "../components/Icons"
import { useWindowDimension } from "../hooks/useWindowDimensions";
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination } from 'swiper'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//plugins
let gsap = require("gsap/dist/gsap").gsap;
const { ScrollTrigger} = require("gsap/dist/ScrollTrigger");


const highlightHistory = [
    {
        id:1
    },
    {
        id:2
    },
    {
        id:3
    },
    {
        id:4
    },
    {
        id:5
    },
]

const HighlightHistorySection = () =>{
    const vidHighLight = useRef<null | HTMLVideoElement>(null)

   const [item,setItem] = useState(1)
   const [idItem,setIdItem] = useState(1)
   const [showVideo,setShowVideo] = useState(false)
   const [cors,setCors] = useState<any>({x:0,y:0})
   const [addAnimate,setAddAnimate] = useState<boolean>(false)

   
    const nextItem = () =>{
        if(item < highlightHistory.length){
            setItem(item+1)
        }
    }
    const prevItem = () =>{
        if(item > 1){
            setItem(item-1)
        }
    }

    const onShowVideo = (id:any) =>{
       
        if(window.innerWidth > 768){
            setAddAnimate(true)
            gsap.timeline()
            .to('.video-box',{webkitClipPath:'circle(100% at 50% 50%)',width:'70%',height:'100%',x:0,duration:.6,ease:'expo.in'})
            .to('.hightLight-item',{x:-80, scale:.8,opacity:0,duration:.8,ease:'expo.in'},'-=1')
            .to('.hightLight-item-image',{ scale:1.4,duration:1,ease:'expo.out'},'-=.2')
            
            
            setTimeout(() => {
                setShowVideo(true)
            }, 500);

        }else{
            
            setShowVideo(true)
            setTimeout(() => {
                document.body.style.height = '100vh'
                document.body.style.overflow = 'hidden'
                const vid = document.querySelector(`#vidprev-${id}`)
                const vidCors = vid?.getBoundingClientRect()
                setCors({x:vidCors?.x,y:vidCors?.y})
                gsap.set('#videoPrevScreen',{x:vidCors?.x,opacity:0,y:vidCors?.y,webkitClipPath:'circle(50% at 50% 50%)',width:380,height:380})
                setTimeout(() => {
                    gsap.timeline()
                    .from('#videoPrevScreen',{opacity:0,duration:1,ease:'expo.out'})
                    .to('#videoPrevScreen',{opacity:1,duration:1,ease:'expo.out',webkitClipPath:'circle(100% at 50% 50%)',width:'100%',height:'100%',y:0,x:0})
                    
                }, 50);
               
              
            }, 50);
            setTimeout(() => {
                setAddAnimate(true)
                setTimeout(() => {
                    gsap.timeline()
                    .from('.onCloset-button',{opacity:0,scale:0, ease:'expo.out'})
                    .to('.onCloset-button',{opacity:1,scale:1, ease:'expo.out'})
                    
                }, 100);
            },1400);
        }
      
    }

    const onHidden = () =>{

        setAddAnimate(false)
        if(window.innerWidth > 768){
            gsap.timeline()
            .to('.hightLight-item',{x:0, scale:1,opacity:1,duration:.5,ease:'expo.in',stagger:.1})
            .to('.video-box',{webkitClipPath:'circle(50% at 50% 50%)',width:380,height:380,x:-180,duration:.5,ease:'ease.in'},'-=.3')
            .to('.hightLight-item-image',{ scale:1,duration:1,ease:'expo.out'},'-=.9')
            setShowVideo(false)
            
        }else{

            /* MOBILE */
            gsap.timeline()
                .from('#videoPrevScreen',{opacity:1,duration:1,ease:'expo.out',webkitClipPath:'circle(100% at 50% 50%)',width:'100%',height:'100%',y:0,x:0})
                .to('#videoPrevScreen',{opacity:0,duration:1,ease:'expo.out',webkitClipPath:'circle(50% at 50% 50%)',width:380,height:380,y:cors.y,x:cors.x})
                setTimeout(() => {
                    document.body.style.height = 'auto'
                document.body.style.overflow = 'visible'
                    setShowVideo(false)
                }, 2000);
              
        }
        

      
      

    }

    useEffect(()=>{
       
        if(window.innerWidth > 768){
            gsap.set('.video-box',{webkitClipPath:'circle(50% at 50% 50%)',width:380,height:380,x:-180})

        }else{
            gsap.set('.video-box',{webkitClipPath:'circle(50% at 50% 50%)',width:380,height:380})
           
        }
        
   
        gsap.registerPlugin(ScrollTrigger)
        gsap
        .timeline({
          scrollTrigger: {
            trigger: ".hightLightSection",
            start: "-30%",
            end: "end end",
            ease: "power3",
          scrub: 1,
         reverse: true,
          
          },
        })
        .from('.tr-item-hight',{y:20,opacity:0,duration:1.5, ease:'expo.out'})
        .to('.tr-item-hight',{y:0,opacity:1,duration:1.5, ease:'expo.out'}) 
    },[])
    return(
        <Fragment>
        <section className="text-dark bg-primary-light bg-grey-lighter py-12 relative hightLightSection ">
            <div className=" px-wrapper-sm lg:px-wrapper w-full h-full grid grid-cols-12 tr-item-hight">
                
                <div className="col-span-12 lg:col-span-5 flex flex-col items-center ">
                    <h2 className="text-dark  text-4xl m-0 text-center lg:text-left self-center lg:self-start hightLight-item"><span className="font-light">HISTORIAS</span> <br /> DESTACADAS</h2> 
                    <div className="mt-16 lg:mt-12">
                       
                        {
                            highlightHistory.map((element)=>(
                               
                                element.id === item &&
                                 
                                    <HighlightHistory className={`${element.id === item && 'opacity-0 animate-appear'}`} key={element.id} />
                    
                            ))
                        }
                        <div className="flex justify-center lg:justify-start  lg:-translate-x-4 mt-5 hightLight-item">
                            <button onClick={()=>prevItem()}>
                                <Icons.ArrowLeft size="3.2rem" className={`text-orange ${item === 1 ? 'opacity-50' : 'opacity-100'}`} />
                            </button>
                            <button onClick={()=>nextItem()}>
                            <Icons.ArrowRight size="3.4rem"  className={`text-orange ${item >= highlightHistory.length ? 'opacity-50' : 'opacity-100'}`}/>
                            </button>
                        </div>
                    </div>
                </div>     
           
            </div>
           
        {/*  {
             showVideo && 
                 
          <video id={'vidPrev'} style={{transform:`translate(${cors?.x}px,${cors?.y}px)`}}  className={`z-10 object-cover transition duration-500 top-0 right-0 absolute   ${addAnimate ? 'w-8/12 h-full rounded-image' : 'rounded-full w-highLightImage h-highLightImage '}`} controls={showVideo} poster="/assets/video/poster-vd.png" preload="auto" width="100%" height="100%" >
                    <source src="/assets/video/sample.mp4" type="video/mp4" />

                        Your browser does not support the video tag.
                </video>
               
                
            </div>          
         } */}
                                
                                <div className={`video-box hidden lg:block   absolute top-2/4 right-0 transform -translate-y-2/4 `}>
                {
                    addAnimate && 
                     <button  onClick={()=>onHidden()} className="absolute z-50 right-3 top-3 bg-slate-800/50 z-50 text-white w-10 h-10 rounded-full flex justify-center items-center">
                         <Icons.Close size="1.7rem" />
                      </button>   
                }
                <video ref={vidHighLight} className={`object-cover transition duration-500 w-full h-full `} controls={showVideo} poster="/assets/video/poster-vd.png" preload="auto" width="100%" height="100%" >
                    <source src="/assets/video/sample.mp4" type="video/mp4" />

                        Your browser does not support the video tag.
                </video>
                {
                    !addAnimate &&
                <button onClick={()=>onShowVideo(0)} className="absolute animate-animate top-2/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4 text-white">
                <Icons.Play size="6.5rem"  />  
                </button>
                }
                </div> 

              {/* VIDEO-PRE-MOBILE */}  
             <div className=" block lg:hidden mt-9 highLight-video-box  grey-bullet" >
            
            <Swiper
            className="mt-10 "
            pagination={{
            clickable: true,
            
            }}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={0}
            modules={[Pagination]}
            
          breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 300,
                },
               
                
              }} 
            >{
                   Array(8).fill(8).map((item,key)=>(
                    <SwiperSlide  key={key}>
                    <div  className="flex justify-center items-center relative  ">
                    <div className={`video-box  relative `}>
                            {
                                addAnimate && 
                                 <button onClick={()=>onHidden()} className="absolute right-3 top-3 bg-slate-800/50 z-20 text-white w-10 h-10 rounded-full flex justify-center items-center">
                                     <Icons.Close size="1.7rem" />
                                  </button>   
                            }
                            <video id={`vidprev-${key}`} className={`object-cover transition duration-500 w-full h-full `} controls={showVideo} poster="/assets/video/poster-vd.png" preload="auto" width="100%" height="100%" >
                                <source src="/assets/video/sample.mp4" type="video/mp4" />
            
                                    Your browser does not support the video tag.
                            </video>
                            {
                                !addAnimate &&
                            <button onClick={()=>onShowVideo(key)} className="absolute animate-animate top-2/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4 text-white">
                            <Icons.Play size="6.5rem"  />  
                            </button>
                            }
                            </div> 
            
                    </div>
                    </SwiperSlide>
                   ))
               }
               </Swiper>
          </div>    
         </section>
               {
                   showVideo && window.innerWidth < 768 &&
            <section className="fixed top-0 left-0  w-full h-full z-50 block lg:hidden">
                <video  id="videoPrevScreen" className={`object-cover  absolute top-0 left-0 opacity-0 `} controls={showVideo} poster="/assets/video/poster-vd.png" preload="auto" width="100%" height="100%" >
                 <source src="/assets/video/sample.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {
                    addAnimate &&
                    <button onClick={()=>onHidden()} className="onCloset-button opacity-0 absolute right-3 top-3 bg-slate-800/50 z-20 text-white w-10 h-10 rounded-full flex justify-center items-center">
                           <Icons.Close size="1.7rem" />
                    </button>   
                }
             </section> 
                                  
               }
         </Fragment>
    )

}

export default HighlightHistorySection 