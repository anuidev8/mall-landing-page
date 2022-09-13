import Button from "../components/Button"
import Image from "next/image"
import { Fragment, useEffect } from "react"

//plugins
let gsap = require("gsap/dist/gsap").gsap;
const { ScrollTrigger} = require("gsap/dist/ScrollTrigger");

const OurMagazine = () =>{
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
    gsap
    .timeline({
      scrollTrigger: {
        trigger: ".magazineSection",
        start: "-30%",
        end: "end end",
        ease: "power3",
      scrub: 1,
     reverse: true,
      
      },
    })
    .from('.tr-item-mag',{y:20,opacity:0,duration:1.5, ease:'expo.out'})
    .to('.tr-item-mag',{y:0,opacity:1,duration:1.5, ease:'expo.out'})
    },[])
    return(
    
        <section className="magazineSection relative ">
            <div className="w-full hidden lg:block  h-8"></div>
        <div className="bg-grey-accent px-wrapper-sm lg:px-wrapper-xl w-full h-full grid grid-cols-12 tr-item-mag">
        <div className="col-span-12 lg:col-span-6 py-12  lg:py-16">

        <h2 className="text-dark  text-center lg:text-left text-4xl m-0 font-light"> NUESTRA <span className="font-medium">REVISTA</span></h2>
        <p className="font-light  text-base text-center lg:text-left lg:text-1xl mt-6 text-dark">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p>
        <div className="flex relative z-20 justify-center lg:justify-start items-center lg:items-start transform translate-y-10 lg:translate-y-0">
            <Button title="QUIERO VER" externalLink className="text-base lg:text-sm w-60 lg:w-40 h-20 lg:h-14  bg-grey-dark hover:bg-primary text-white font-medium" />
        </div>
            <div className="h-96 block lg:hidden">
             <Image
                  src="/assets/home/room.png"
                  alt="Picture of the author"
                  layout="responsive"
                  width={"100%"}
                  height={"100%"}
                  objectFit="cover"
                  
                  
                
                  />  

            </div>
        </div>
        <div className="col-span-12 lg:col-span-6 hidden lg:block">

        <div  className="absolute left-magazine top-0  h-full w-w_image ">
        <Image
                  src="/assets/home/room.png"
                  alt="Picture of the author"
                  layout="fill"
                  width={"100%"}
                  height={"100%"}
                  objectFit="cover"
                  
                
                  />  

        </div>
        </div>
        </div>
    </section> 
  
    )

}

export default OurMagazine