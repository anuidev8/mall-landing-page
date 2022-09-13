import type { NextPage } from 'next'
import{ useState,useEffect } from 'react'
import MainLayout from '../layout/Wrapper'

//sections
import MainSection from '../sections/MainSection';
import EventSection from '../sections/EventsSections';
import HighlightHistorySection from '../sections/HighlightHistorySection';
import VideoSection from '../sections/VideoSection';

import {
  Scene,
  Box,
  Sphere,
  Cylinder,
  Plane,
  Sky,
  Text,
  Assets,
  Video,
  Entity,
  Camera

} from '@belivvr/aframe-react';
import TestimonialsSection from '../sections/TestimonialsSection';
import OurMagazine from '../sections/OurMagazine';
import VirtualImage from '../components/VirtualImage';
import MainLogo from '../components/brand/MainLogo';


const Home: NextPage = () => {
  const [rendered, setRendered] = useState<boolean>(false);

 useEffect(() => {
    setRendered(true);
  
    if (typeof window !== 'undefined') {
      require('aframe'); // eslint-disable-line global-require
     
    }
   
 
   
    
  }, [rendered]); 

  if (!rendered) {
    return (
      <section className='h-screen overflow-hidden w-full flex items-center justify-center bg-primary-accent animate-appear'>
          <MainLogo animate size='20rem' className='animate-appear' />
         
      </section>
    )
  } 
  return (
    <MainLayout>
        <MainSection>
            <VirtualImage />
        </MainSection>
        <EventSection />
        <HighlightHistorySection />
        <TestimonialsSection />
        <VideoSection />
        <OurMagazine />
    </MainLayout>
  )
}

export default Home
