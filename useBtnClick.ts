import React, { useRef, useEffect, MouseEventHandler } from "react";
import { json } from "stream/consumers";

export const useMouseClick = ()=>{
  const hoverRef = useRef<HTMLInputElement>(null);
  useEffect(
    () => {
      if(hoverRef.current){
        console.log('elem', hoverRef.current);
        // hoverRef.current.onmousedown = btnClick
        // hoverRef.current.onmouseup =  btnUnClick
        // hoverRef.current.onmouseleave = btnUnClick
      }
      return ()=>{
        console.log('unload');
      }
    },
    [hoverRef],
  )
  const btnClick = (e: React.MouseEvent): void=>{
    const elem =  (e.target as HTMLElement )
    if(!elem.classList.contains('btn-pressed')) elem.classList.add('btn-pressed')
    
  }
  const btnUnClick = (e: React.MouseEvent): void=>{
    const elem =  (e.target as HTMLElement )
    // console.log('unClick', elem.classList, elem.classList.contains('shadow-md'));
    if(elem.classList.contains('btn-pressed')) elem.classList.remove('btn-pressed')
  }
  return { hoverRef, btnClick, btnUnClick}
}
