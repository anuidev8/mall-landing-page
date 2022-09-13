import { useEffect } from "react"
import EventCard from "../components/events/EventCard"

import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination,FreeMode } from 'swiper'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//plugins
let gsap = require("gsap/dist/gsap").gsap;
const { ScrollTrigger} = require("gsap/dist/ScrollTrigger");

const EventSection = () =>{

    useEffect(()=>{
      if(window.innerWidth > 768){
        gsap.registerPlugin(ScrollTrigger)
           gsap
           .timeline({
             scrollTrigger: {
               trigger: ".eventSection",
               start: "-10%",
               end: "end end",
               ease: "power3",
             scrub: 1,
            reverse: true,
             
             },
           })
           .from('.tr-item-event',{opacity:0,duration:1.5, ease:'expo.out',stagger:.1})
           .to('.tr-item-event',{opacity:1,duration:1.5, ease:'expo.out',stagger:.1}) 

      }else{
        gsap.registerPlugin(ScrollTrigger)
        gsap
        .timeline({
          scrollTrigger: {
            trigger: ".eventSection",
            start: "-10%",
            end: "end end",
            ease: "power3",
          scrub: 1,
         reverse: true,
          
          },
        })
        .from('.tr-item-event',{opacity:0,duration:2,y:100, ease:'expo.out',stagger:.1})
        .to('.tr-item-event',{opacity:1,duration:2,y:0, ease:'expo.out',stagger:.1}) 
      }
          
    },[])
    return(
           <section className="eventSection py-12 lg:py-24 text-dark bg-primary-light ">
               <div className="lg:px-wrapper w-full h-full ">
               <h2 className="text-dark text-center text-4xl  px-wrapper-sm lg:px-0 m-0 tr-item-event"><span className="font-light"> PROXIMOS</span> <br /> EVENTOS</h2>
               <p className="font-light text-center text-base px-wrapper-sm lg:px-0 lg:text-1xl mt-11 tr-item-event">Artistic, cultural, or scientific significance for the education <br/> of the public.</p>
               <div className="mt-11 tr-item-event hidden lg:block">
               <EventCard />
               <EventCard className="mt-7" />
               <EventCard className="mt-7" />
               </div>
               <div className="block lg:hidden grey-bullet  tr-item-event" >
            
                 <Swiper
                 className="mt-10 "
                 pagination={{
                 clickable: true,
                 
                 }}
                 freeMode={true}
                 slidesPerView={1}
                 spaceBetween={20}
                 modules={[Pagination,FreeMode]}
                 
               breakpoints={{
                     640: {
                       slidesPerView: 1,
                       spaceBetween: 20,
                     },
                     768: {
                       slidesPerView: 1,
                       spaceBetween: 300,
                     },
                    
                     
                   }} 
                 >{
                        Array(10).fill(10).map((item,key)=>(
                            <SwiperSlide  key={key}>
                                 <EventCard />
                            </SwiperSlide>
                        ))
                    }
                    </Swiper>
               </div>
               </div>
           </section> 
    )

}

export default EventSection