import React from 'react'
//types
import { Layout } from './types'

//components
import Header from '../components/Header'
import Footer from '../components/Footer'


const Wrapper:React.FC<Layout> = ({ children }) => {

    return (
        <main className='overflow-hidden  bg-white flex  justify-center items-center'>
         
          <div className='max-w-screen-2xl bg-primary-accent  w-full'>
          
            <Header />
            {children}
             <Footer /> 
          </div>
       
    
    
        </main>
    )

}

export default Wrapper
