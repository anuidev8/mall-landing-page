import { EventType } from "./types"
import Image from "next/image"
import Button from "../Button"


const EventCard:React.FC<EventType> = ({className}) =>{

    return(
        <article className={`block lg:flex eventCard bg-white rounded-eventCard h-auto lg:h-eventCard py-7 pb-10 lg:pb-0 lg:py-0 align-center items-center justify-between px-12 lg:px-14 ${className}`}>
            <div className="flex items-center justify-center lg:items-start lg:justify-start">
            <span className="text-lg font-light text-grey lg:mt-2 block lg:hidden mr-2">Viernes</span>
                <span className="text-6xl lg:text-5xl font-light lg:pt-3 mr-3">15</span>
                <div className="flex flex-col">
                <span className="text-xl lg:text-lg  lg:pt-0 font-medium">Enero</span>
                <span className="text-base font-light text-grey mt-2 hidden lg:block">Viernes</span>

                </div>
            </div>
            <div className="block lg:flex items-center ">
            <figure className="hidden lg:block">
            <Image
                src="https://cdn.pixabay.com/photo/2022/02/25/04/11/traffic-7033509__340.jpg"
                alt="Picture of the author"
                width={160}
                height={105}
                />
            </figure>
            <figure className="block lg:hidden">
            <Image
                src="https://cdn.pixabay.com/photo/2022/02/25/04/11/traffic-7033509__340.jpg"
                alt="Picture of the author"
                layout="responsive"
                width={"100%"}
                height={60}
                objectFit="cover"
                />
            </figure>
            <div className=" ml-7">
             <h3 className="text-eventTitle text-center lg:text-left mt-7 lg:mt-0  font-medium">Primarily concerned with a space</h3>
             <div className="flex mt-2 justify-center lg:justify-start items-center">
              <div className="w-4 h-4 bg-grey rounded-full"></div>  
                <span className="text-grey ml-2 font-light">11:00 pm – 5:00 pm</span>
             </div>
            </div>
                
            </div>
            <div className="flex lg:block justify-center mt-7 lg:mt-0 ">
                 <Button title="LEER MAS" className="text-sm lg:text-btnSmall  border border-grey w-48 h-12 lg:h-btn lg:w-btn text-grey transition-colors hover:border-grey-dark hover:text-grey-dark" />   
            </div>
        </article>
    )

}

export default EventCard