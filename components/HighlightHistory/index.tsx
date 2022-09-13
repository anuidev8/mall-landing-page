import { HighlightHistoryTypes } from "./types"
import Image from "next/image"

const HighlightHistory:React.FC<HighlightHistoryTypes> = ({className}) =>{
    return(
        <article className={` ${className}`}>
              <div className="flex justify-center lg:justify-start items-center hightLight-item-image">
              <figure className="mr-4">
                    <Image
                        src="https://cdn.pixabay.com/photo/2019/11/29/21/30/girl-4662158__340.jpg"
                        alt="Picture of the author"
                        width={64}
                        height={64}
                        className="rounded-full"
                        objectFit="cover"
                        />
                </figure>
                <div>
                    <h3 className="text-2xl lg:text-lg text-dark-lighter ">Paola Escobar</h3>
                    <h4 className="text-base text-dark-text">Mouette</h4>
                </div>
            </div>
            <p className="text-paragraphText font-light text-sm mt-4 text-justify hightLight-item">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.</p>  
        </article>
    )
}

export default HighlightHistory