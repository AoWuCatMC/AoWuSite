'use client';
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(0);
  const onScroll = useCallback(e => {
    if (window.scrollY > 50) {
      return setScrolled(1);
    } return setScrolled(0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, []);

  const style = (scrolled && {height: 0}) || {};
  return (
    <>
      <div style={style} className="fixed w-full h-1/4 md:h-full min-h-[8vh] md:min-h-[14vh] max-h-[36vw] transition-all duration-1000 ease-out rounded-b-2xl shadow shadow-white/80 overflow-hidden flex flex-col items-center justify-center z-[10]">
        <div className="absolute w-full h-full bg-sky-300 z-[11]">
          <Image src="/images/village-view-trans.png" alt="Village Top View" width="1503" height="576" className="absolute w-full bottom-0" />
        </div>
        <div className="w-3/4 bg-white/60 md:rounded-2xl backdrop-blur-lg md:backdrop-blur-3xl flex justify-center z-[12]">
          <div className="w-1/2 p-4 md:p-16 flex justify-center">
            <Image src="/images/logo-dark.png" alt="AoWuCatMC Logo" width="157" height="40" className={'transition-all duration-1000 w-full ' + ((scrolled && 'md:w-1/2') ?? '')} />
          </div>
        </div>
      </div>
      <div className="relative h-1/4 max-h-[36vw] mb-28 md:mb-16 opacity-0 pointer-events-none -z-50"></div>
    </>
  )
}