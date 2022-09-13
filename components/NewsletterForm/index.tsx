import Button from "../Button"


const NewsletterForm = () =>{

    return(
        <form className="flex flex-col lg:flex-row h-full lg:h-10 justify-center items-center w-full">
            <input className="text-xs h-16 lg:h-10 px-4 font-light w-full lg:w-56 lg:mr-6" type={"email"} placeholder="your email" />
            <Button title="SUSCRIBIRME" type="submit"  className="text-1xl lg:text-sm w-48 lg:w-40 h-16 lg:h-full bg-grey-dark text-white font-medium  hover:bg-primary mt-7 lg:mt-0" />
        </form>
    )
}

export default NewsletterForm