import {FC} from 'react'


type Props = {
    size?:string
    className?:string
}

export  class Icons {

   
   
    static ArrowRight:FC<Props> = ({className,size = "1rem"})=> {
        return(
            <figure className={className}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height={size} width={size} ><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" /></svg>
            </figure>
        )
    }
    static ArrowLeft:FC<Props> = ({className,size = '1rem'})=> {
        return(
            <figure className={className}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height={size} width={size}><g><path fill="none" d="M0 0h24v24H0z" /><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" /></g></svg>
            </figure>
        )
    }
    static Play:FC<Props> = ({className,size})=> {
        return(
            <figure className={className}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height={size} width={size} ><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" /></svg>
            </figure>
        )
    }
    static Facebook:FC<Props> = ({className,size})=> {
        return(
            <figure className={className}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 320 512" height={size} width={size}><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>

            </figure>
        )
    }
    static FacebookCircle:FC<Props> = ({className,size})=> {
        return(
            <figure className={className}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height={size} width={size}><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>


            </figure>
        )
    }
    static Twitter:FC<Props> = ({className,size})=> {
        return(
            <figure className={className}>
                 <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height={size} width={size} ><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
            </figure>
        )
    }
    static Instagram:FC<Props> = ({className,size})=> {
        return(
            <figure className={className}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height={size} width={size} ><path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z" /></svg>
            </figure>
        )
    }
    static Block:FC<Props> = ({className,size})=> {
        return(
            <figure className={className}>
                 <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height={size} width={size}><path fillRule="evenodd" d="M11.5 8h-7a1 1 0 00-1 1v5a1 1 0 001 1h7a1 1 0 001-1V9a1 1 0 00-1-1zm-7-1a2 2 0 00-2 2v5a2 2 0 002 2h7a2 2 0 002-2V9a2 2 0 00-2-2h-7zm0-3a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z" clipRule="evenodd" /></svg>
            </figure>
        )
    }
    static Menu:FC<Props> = ({className,size})=> {
        return(
            <figure className={className}>
                 <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height={size} width={size} ><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" /></svg>
            </figure>
        )
    }
    static Close:FC<Props> = ({className,size})=> {
        return(
            <figure className={className}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height={size} width={size}><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" /></svg>
            </figure>
        )
    }
  


    }
