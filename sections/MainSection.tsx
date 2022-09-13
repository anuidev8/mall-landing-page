
import { useEffect,useState } from 'react'
import Button from "../components/Button"
import { Icons } from "../components/Icons"
import { Layout } from "../layout/types"
import FeatureCard from "../components/FeatureCard"
import Image from "next/image"
import MainText from '../components/MainText'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";



// import required modules
import { EffectCards } from "swiper";


let gsap = require("gsap/dist/gsap").gsap;
const { ScrollTrigger} = require("gsap/dist/ScrollTrigger");
const MainSection:React.FC<Layout> = ({children}) =>{
    
    useEffect(()=>{
     
        if(window.innerWidth > 768)  {
            gsap.registerPlugin(ScrollTrigger)
            gsap
            .timeline({
            scrollTrigger: {
                trigger: ".mainSection",
                start: "10%",
                end: "center center",
                ease: "power3",
            scrub: 1,
            reverse: true,
            
            },
            })
            .to('.discovered-text-container',{opacity:0,y:-100,ease: "expo.out", duration:2})
            .to('#virtual-image',{opacity:1,width:'100%',height:'100%', duration:6})
            .to('#virtual-image',{opacity:1,y:80,ease: "expo.out", duration:2})
            
            .from('.more-text-container',{y:100,opacity:0,duration:2},"-=4",)
            .to('.more-text-container',{y:-20,opacity:1,duration:2},"-=4")
            .from('.text-container',{backgroundColor:'rgba(239,238,233,1)',duration:2.5})
            .to('.text-container',{backgroundColor:'rgba(239,238,233,.7)',duration:2.5})
            .to('#virtual-image',{opacity:1,y:300,ease: "expo.out", duration:2})
        }else{
            gsap.registerPlugin(ScrollTrigger)
            gsap
            .timeline({
            scrollTrigger: {
                trigger: ".mainSection",
                start: "10%",
                end: "center center",
                ease: "power3",
            scrub: 1,
            reverse: true,
            
            },
            })
            .to('.discovered-text-container',{opacity:0,y:-100,ease: "expo.out", duration:2})
            .from('#virtual-image',{opacity:0,y:100,ease: "expo.out", duration:1.5})
            .to('#virtual-image',{opacity:1,y:0,ease: "expo.out", duration:1.5})
            .from('.more-text-container',{y:100,opacity:0,duration:1.5})
            .to('.more-text-container',{y:0,opacity:1,duration:1.5})
          
        }
       
    },[])
    return(
           <section  className="mainSection overflow-hidden     min-h-screen relative animate-appear translate-y-10 opacity-0  animate-translateY">
               <div className="grid grid-cols-12 min-h-screen  z-20">
                    <div className="col-span-12 lg:col-span-5  text-container  lg:pl-wrapper bg-primary-accent relative z-20 transition-colors  relative lg:pr-8 flex flex-col  pt-16 pt-lg-20">
                   <div className='discovered-text-container transform pl-wrapper-sm lg:pl-0  pr-wrapper-sm lg:pr-0'>
                         <MainText />
                        <p className=" font-light  text-base text-center lg:text-left lg:text-1xl mt-2 lg:mt-0 text-dark">Learn mindfulness with our experienced teachers and get in touch with your inner peace. Our classes are available for both off line and online sessions.</p>
                        <div className="flex mt-8 lg:mt-10">
                        <Button title="HACER RECORRIDO" externalLink className="text-xs lg:text-sm w-44 h-14 mr-8  bg-dark text-white font-medium hover:bg-dark-light" />
                        <Button title="VISITAR TIENDA" externalLink className="text-xs lg:text-sm w-44 h-14  text-grey-dark border border-grey-dark hover:bg-grey-dark hover:text-white font-medium" />
                        </div>
                        <ul className="flex lg:pl-6 mt-7 lg:mt-14 items-center justify-center lg:justify-start  relative z-50">
                        <span className="block lg:hidden h-line w-16 bg-grey-dark transform -translate-x-2"></span>
                            <li className="mr-4 lg:mr-14">
                                <a className="text-grey-dark flex justify-center items-center w-12 h-12 rounded-full transition-color duration-400 hover:bg-grey-hover">
                                    <Icons.Twitter  size="1.6rem"/>
                                </a>
                            </li>
                            <li className="mr-4 lg:mr-14">
                                <a className="text-grey-dark flex justify-center items-center w-12 h-12 rounded-full transition-color duration-400 hover:bg-grey-hover">
                                    <Icons.Instagram size="1.6rem" />
                                </a>
                            </li>
                            <li >
                                <a className="text-grey-dark flex justify-center items-center w-12 h-12 rounded-full transition-color duration-400 hover:bg-grey-hover">
                                    <Icons.FacebookCircle size="1.6rem"/>
                                </a>
                            </li>
                            <span className="block lg:hidden h-line w-16 bg-grey-dark transform translate-x-2"></span>
                            <span className="hidden lg:block h-line w-32 bg-grey-dark transform translate-x-10"></span>
                        </ul>
                    </div> 
                   
                     <div className="col-span-5 more-text-container overflow-hidden relative relative z-20 pr-8 hidden lg:flex flex-col justify-center lg:py-10">
                       
                        <h2 className="text-dark font-semibold  text-4xl">
                        LOREM IPSUM <br/> DOLOR SIT.
                        </h2>
                        <p className=" font-light  text-1xl mt-6 text-dark">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
                        
                        <div className="grid grid-cols-2 gap-10 mt-12">
                            <FeatureCard />
                            <FeatureCard />
                        </div>  
                        <div className="grid grid-cols-2 gap-10 mt-10">
                            <FeatureCard />
                            <FeatureCard />
                        </div>  
                        
                        
                        </div>
                    
                    <div className="block lg:hidden w-full h-virtualImage transform col-span-12 mt-7 transition-all duration-500 " id='virtual-image' >
                        {children}
                    </div>

                    <div className="text-center more-text-container overflow-hidden px-wrapper-sm relative relative z-50  flex py-20 lg:hidden flex-col justify-center lg:py-10">
                       
                       <h2 className="text-dark font-semibold  text-4xl">
                       LOREM IPSUM <br/> DOLOR SIT.
                       </h2>
                       <p className=" font-light  text-base lg:text-1xl mt-7 lg:mt-6 text-dark">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
                       
                       <div className="hidden lg:grid grid-cols-2 gap-10 mt-12">
                           <FeatureCard />
                           <FeatureCard />
                       </div>  
                       <div className="hidden lg:grid grid-cols-2 gap-10 mt-10">
                           <FeatureCard />
                           <FeatureCard />
                       </div>  
                        <div className='block lg:hidden main-section mt-12'>
                        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
                       
                        </div>
                      
                       
                       </div>
                    </div>
                    
                    <div className="hidden lg:block h-2/4 w-2/4 right-0 absolute transform top-0  z-10  transition-all duration-500 " id='virtual-image' >
                        {children}
                    </div>
                   
               </div>
               
               
               
              
            
           </section> 
    )

}

export default MainSection