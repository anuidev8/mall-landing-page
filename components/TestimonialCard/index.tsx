
import React,{  useMemo} from 'react'
import { TestimonialTypes } from "./types"
import Image from 'next/image'


type StartIcon = {
    fill?:string
}

interface RatingIcon {
    index?:any,
    rating?:any,
        
}

const  StarIcon:React.FC<StartIcon>= ({fill}) => {

    return (
      <svg className="w-5 h-5 " fill={fill} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke='none'  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
    );
  }

  const  RatingIcon:React.FC<RatingIcon> = ({
    
        index,
        rating,
       
      
  }) => {
  
    const fill = useMemo(() => {
       if ( rating >= index) {
        return '#FCB901';
      }
      return '#C4C4C4';
    }, [rating, index]);
    return (
        <div 
          className="cursor-pointer text-orange flex">
          <StarIcon fill={fill} />
        </div>
    )
  }
const TestimonialCard:React.FC<TestimonialTypes> = ({}) =>{
    const [rating, setRating] = React.useState(4);
  
    return(
        <article className="bg-white  w-full lg:w-64 px-6 lg:px-4 py-9 lg:py-4 rounded-testimonialCard">
            <div className="flex items-center">
            <Image
                  src="https://cdn.pixabay.com/photo/2019/11/29/21/30/girl-4662158__340.jpg"
                  alt="Picture of the author"
                  width={48}
                  height={48}
                  className="rounded-lg"
                  objectFit="cover"
                  />  

                  <h4 className="text-lg lg:text-sm text-grey-text  ml-3"><span className="text-dark">Jim,</span> Connecticut</h4> 
                 
            </div>
            <p className="text-lg lg:text-sm mt-5 leading-5 font-interFont">I love the design of the furniture provided by Corate. It fits my study well</p>
            <div className='flex mt-5'>

             {[1, 2, 3, 4, 5].map((index,key) => (
                 
          <RatingIcon 
                key={key}
            index={index} 
            rating={rating} 
             />
       
      ))} 
            </div>
        </article>
    )

}

export default TestimonialCard