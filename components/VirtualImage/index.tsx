import React, { useEffect,useState } from 'react'

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
import { VirtualImageTypes } from './types';

const VirtualImage:React.FC<VirtualImageTypes> =  () => {
  /* const [rendered, setRendered] = useState<boolean>(false);

  useEffect(() => {
    setRendered(true);

    if (typeof window !== 'undefined') {
      require('aframe'); // eslint-disable-line global-require
    }
  }, [setRendered]); 

  if (!rendered) {
    return <>loading</>;
  } */ 
  return (


    <Scene antialias="true" embedded>
    <Sky   src="/assets/home/events/eventexample.png" rotation={{x:0,y: -130,z:0}}></Sky>

    <Text font="kelsonsans" value="Vista Verde" width={6} position={{x:-2.5, y:0.25, z: -1.5}}
            rotation={{x:0,y:15,z:0}}></Text>
  </Scene>
 
  )
}

export default VirtualImage
