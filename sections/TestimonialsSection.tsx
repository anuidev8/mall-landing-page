import TestimonialCard from "../components/TestimonialCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,FreeMode } from 'swiper'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";
//plugins
let gsap = require("gsap/dist/gsap").gsap;
const { ScrollTrigger} = require("gsap/dist/ScrollTrigger");


const TestimonialsSection = () =>{

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap
    .timeline({
      scrollTrigger: {
        trigger: ".testimonialSection",
        start: "-30%",
        end: "end end",
        ease: "power3",
      scrub: 1,
     reverse: true,
      
      },
    })
    .from('.tr-item-test',{y:20,opacity:0,duration:1.5, ease:'expo.out'})
    .to('.tr-item-test',{y:0,opacity:1,duration:1.5, ease:'expo.out'})
  },[])

    return(
        <section className="bg-grey-dark py-12 lg:py-16 testimonialSection">
             <div className=" lg:pl-wrapper-xl w-full h-full  lg:border-t border-t-grey-liner lg:pt-8 tr-item-test">
               <h2 className="text-white text-center lg:text-left  text-4xl m-0 font-medium">TESTIMONIOS</h2>
               <p className="font-light text-center lg:text-left  text-base lg:text-1xl mt-5 lg:mt-11 text-white">From a visitor or community perspective, the purpose can also <br/> depend on ones point of view.</p>

               <div className="mt-12">
                   <Swiper
                 
                    pagination={{
                    clickable: true,
                    
                    }}
                    centeredSlidesBounds
                    freeMode={true}
                    slidesPerView={1}
                    spaceBetween={15}
                    modules={[Pagination,FreeMode]}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween:15,
                        },
                        768: {
                          slidesPerView: 1,
                          spaceBetween: 200,
                        },
                        1024: {
                          slidesPerView: 5,
                          spaceBetween: 200,
                        },
                        
                      }} 
                    >
                    {
                        Array(10).fill(10).map((item,key)=>(
                            <SwiperSlide className="lg:mr-10" key={key}>
                                 <TestimonialCard />
                            </SwiperSlide>
                        ))
                    }
                    
                    </Swiper>
               </div>
               </div>
        </section>
    )

}

export default TestimonialsSection