import Image from "next/image"


const FeatureCard = () =>{

    return(
        <article className="bg-white rounded-testimonialCard h-48 flex align-center justify-center flex-col cursor-pointer shadow-featureCard">
         
            <Image
                src="/assets/home/3d-rotation.svg"
                alt="3d image"
                width={40}
                height={60}
                objectFit="contain"
            />
            <h3 className="text-sm text-center text-dark font-semibold mt-6 px-7">LOREM IPSUM DOLOR SIT.</h3>

        </article>
    )
}

export default FeatureCard