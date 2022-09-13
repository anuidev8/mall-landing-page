

//types
interface ButtonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title:string,
    className?:string,
    overlays?:boolean,
    outline?:boolean,
    externalLink?:boolean,
    link?:string
}

const Button:React.FC<ButtonTypes> = ({ title, className,outline,overlays=false,externalLink = false,link,...props }) => {

    return (
        <>
        {
           !externalLink   &&
            <button {...props}   className={` inline-flex font-medium  items-center justify-center transition-color duration-300  ${className}`}>
                {title}
            </button>
        }
        {
           externalLink   &&
            <a  href={link} rel="noreferrer" target="_blank" className={` inline-flex font-medium text-white transition-color duration-300  items-center justify-center  mt-7 cursor-pointer  ${className}`}>
                {title}
            </a>
        }
        </>
    )


}

export default Button
