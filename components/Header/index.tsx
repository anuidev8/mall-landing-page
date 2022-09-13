
import Image from 'next/image'

//data
import { primaryRoutes } from '../../utils/routes'
//components

import NavLink from '../NavLink'
import MainLogo from '../brand/MainLogo'
import { Icons } from '../Icons'
import { useWindowDimension } from '../../hooks/useWindowDimensions'

const Header = () => {
    const screen:any = useWindowDimension()
    return (
        <header className={`pt-10 lg:py-10 flex justify-center max-w-screen-2xl  items-center px-wrapper-sm lg:px-wrapper opacity-0 animate-appear`}>
            <nav className='w-full flex items-center justify-between translate-y-10 opacity-0  animate-translateY'>
               
                 <figure className='grow'>
                 <MainLogo size='15.5rem'  />
                </figure>
          
                <ul className=' hidden lg:flex justify-center items-center'>

                    {
                        primaryRoutes.map((item, index) => (
                            <NavLink key={index} name={item.name} isOnlyView={true} className={primaryRoutes.length === index + 1 ? 'mr-14' : 'mr-mBtwLinks'} />
                        ))
                    }
                    <li className='mr-3'>
                        <button className='w-8 h-8 rounded-full hover:bg-grey-hover transition-color transition-300 flex items-center justify-center'>
                            <Icons.Block  size='1.2rem'/>
                        </button>
                    </li>
                    <li>
                        <button className='w-8 h-8 rounded-full hover:bg-grey-hover transition-color transition-300 flex items-center justify-center' >
                            <Icons.Menu size='1.2rem'/>
                        </button>
                       
                    </li>
                </ul>
                  {/* UL MOBILE */}      
                <ul className='flex lg:hidden justify-center items-center'>
                    <li className='mr-3'>
                        <button className='w-8 h-8 rounded-full hover:bg-grey-hover transition-color transition-300 flex items-center justify-center'>
                            <Icons.Block  size='1.8rem'/>
                        </button>
                    </li>
                    <li>
                        <button className='w-8 h-8 rounded-full hover:bg-grey-hover transition-color transition-300 flex items-center justify-center' >
                            <Icons.Menu size='1.8rem'/>
                        </button>
                    </li>
                    </ul>

            </nav>
        </header>
    )
}

export default Header
