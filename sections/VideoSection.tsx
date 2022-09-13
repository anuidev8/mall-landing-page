import { useEffect } from "react"
import { Icons } from "../components/Icons"

//plugins
let gsap = require("gsap/dist/gsap").gsap;
const { ScrollTrigger} = require("gsap/dist/ScrollTrigger");
const VideoSection = () =>{

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
    gsap
    .timeline({
      scrollTrigger: {
        trigger: ".videoSection",
        start: "-30%",
        end: "end end",
        ease: "power3",
      scrub: 1,
     reverse: true,
      
      },
    })
    .from('.tr-item-vid',{y:20,opacity:0,duration:1.5, ease:'expo.out'})
    .to('.tr-item-vid',{y:0,opacity:1,duration:1.5, ease:'expo.out'})
    },[])
    return(
        <section className="pb-3 py-10 lg:py-16 text-dark bg-primary-accent videoSection">
               <div className="px-wrapper-sm lg:px-wrapper w-full h-full tr-item-vid">
                   <div className="relative">
                   <video className="object-cover hidden lg:block" controls poster="/assets/video/poster-vd.png" preload="auto" width="100%" height="695" >
                    <source src="/assets/video/sample.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                   <video className="object-cover block lg:hidden h-videoSection" controls poster="/assets/video/poster-vd.png" preload="auto" width="100%" height="100%" >
                    <source src="/assets/video/sample.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <button  className="absolute bg-primary w-32 h-32 flex items-center justify-center rounded-full top-2/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4 text-grey-lighter">
                        <Icons.Play size="2rem" />
                    </button>
                   </div>
               
               </div>
           </section> 
    )

}

export default VideoSection