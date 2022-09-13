import { useState,useEffect } from "react";

export interface WindowDimension {
  height:number;
  width:number;
}

export const useWindowDimension = () : WindowDimension =>{
  const [dimension,setDimension] = useState<WindowDimension>({
    width:0,
    height:0,
  })

  const handleResize = () =>{
    setDimension({
      height:window.innerHeight,
      width:window.innerWidth
    })
  }

  useEffect(()=>{
    window.addEventListener('resize',handleResize)
    handleResize()
    return ()=>{
      window.removeEventListener('resize',handleResize)
    }
  },[])

  return dimension
}
