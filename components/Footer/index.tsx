import Link from 'next/link'

import SecondaryLogo from "../brand/SecondaryLogo"
import NewsletterForm from "../NewsletterForm"
import { FooterLinkPage,FooterLinkExternalPage } from '../../utils/links'
import { Icons } from '../Icons'


const Footer = () =>{

    return(
        <footer className="bg-primary-accent ">
            <div className="px-wrapper-sm lg:px-wrapper h-full lg:h-44 grid grid-cols-12">
                <div className="bg-newsletter transform translate-y-9 h-newsletter px-9  lg:h-44 col-start-1 lg:col-start-2 col-end-13 lg:col-end-12  lg:px-20  flex flex-col lg:flex-row items-center justify-center">
                    <div className="grid grid-cols-12 lg:grid-cols-2">
                        <div className="flex justify-center flex-col col-span-12 lg:col-span-1">
                        <h3 className="text-3xl text-center lg:text-left lg:text-2xl text-dark font-medium">NEWSLETTER</h3>
                        <p className="font-light text-center lg:text-left text-base lg:text-1xl mt-4 lg:mt-3 text-dark">Recibe tus ultimas noticias sobre Vista Verde..</p>
                        </div>
                        <div className="flex justify-center items-center flex-col col-span-12 lg:col-span-1 mt-8 lg:mt-0">
                            <NewsletterForm/>
                        </div>

                    </div>
                </div>
            </div>
            <div className='px-wrapper-sm lg:px-wrapper bg-grey-dark'>

            
            <div className='pb-14 pt-24 '>
        <div className='lg:grid grid-cols-12 lg:grid-cols-4'>
            <div className='flex items-center justify-center  lg:items-start lg:justify-start' >
               <SecondaryLogo className='hidden lg:block' size='11rem'  />
               <SecondaryLogo className='block lg:hidden mt-4' size='14rem'  />
            </div>
            <div className='flex justify-center h-full flex-col items-center mt-16 lg:mt-0' >
            
                <div className='flex justify-center  flex-col items-center'>
                <h4 className='text-xl lg:text-lg text-white text-medium text-newsletter lg:self-start'>MENU</h4>
         
                <ul className='w-full mt-5 '>
                  {FooterLinkPage.map((item)=>(
                    <li className='text-primary-accent text-base font-light mb-3 text-center lg:text-left' key={item.name}>
                      <Link href={`${item.router}`}>
                      {item.name}
                      </Link>
                    </li>

                  ))}
                </ul>

                </div>
               
            </div>
            <div className='flex justify-center h-full flex-col items-center mt-8 lg:mt-0' >          
            <div className='flex justify-center  flex-col items-center'>
                <h4 className='text-xl lg:text-lg text-white text-medium text-newsletter lg:self-start'>EXPLORAR</h4>
         
                <ul className='w-full mt-5  '>
                  {FooterLinkExternalPage.map((item)=>(
                    <li className='text-primary-accent text-base font-light mb-3 text-center' key={item.name}>
                      <Link href={`${item.router}`}>
                      {item.name}
                      </Link>
                    </li>

                  ))}
                </ul>

                </div>
                </div>
                <div className='flex  mt-5 h-full flex-col items-center lg:items-end'>
                  <ul className='flex transform lg:-translate-y-2'>
                    <li className='text-newsletter lg:text-dark lg:bg-newsletter hover:bg-grey-light transition-color duration-300 w-10 h-10 rounded-full flex justify-center items-center mr-2'>
                      <a href='h' >
                        <Icons.Facebook size='1.1rem' />
                      </a>
                    </li>
                    <li className='text-newsletter lg:text-dark lg:bg-newsletter hover:bg-grey-light transition-color duration-300 w-10 h-10 rounded-full flex justify-center items-center mr-2'>
                      <a href='h'>
                        <Icons.Twitter className='hidden lg:block' size='1.1rem' />
                        <Icons.Twitter className='block lg:hidden' size='1.4rem' />
                      </a>
                    </li>
                    <li className='text-newsletter lg:text-dark lg:bg-newsletter hover:bg-grey-light transition-color duration-300 w-10 h-10 rounded-full flex justify-center items-center'>
                      <a href='h'>
                        <Icons.Instagram className='hidden lg:block' size='1.1rem' />
                        <Icons.Instagram className='block lg:hidden' size='1.4rem' />
                      </a>
                    </li>
                  </ul>
                </div>
            </div>

        </div>
        <div className=' py-7 lg:py-10  border-t border-t-grey-liner lg:flex'>
          <h3 className=' text-primary-accent text-base font-light grow text-center lg:text-left'>Copyright 2022 Vista Verde. All Rights Reserved.</h3>
          <div className='flex items-center text-center lg:text-left mt-5 lg:mt-0'>
          <h3 className=' text-primary-accent text-sm font-light mr-10'>Términos de Uso.</h3>
          <h3 className=' text-primary-accent text-sm font-light'>Políticas de privacidad</h3>
          </div>
          </div>            
          </div>           

        </footer>
    )
}

export default Footer