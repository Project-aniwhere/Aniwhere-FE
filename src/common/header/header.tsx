"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const bgGradient = "bg-gradient-to-b from-black/40 to-transparent";
const contentBlock = "flex flex-row items-center gap-8";

const headerDefault =
  " font-semibold duration-300 z-50 py-5 px-8 text-white w-full fixed flex flex-row items-center justify-between ";
const whiteTextHeader = "" + bgGradient + headerDefault;

const blackTextHeader = "bg-aniviolet3" + headerDefault;

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isAtTop ? whiteTextHeader : blackTextHeader}>
      <div className={contentBlock}>
        <p className="text-lg font-black">ANIWHERE</p>
        <div className="flex flex-row gap-2">
          <Link href="/tag">태그검색</Link>
          <Link href="/popular">인기작품</Link>
          <Link href="/new">신작</Link>
        </div>
      </div>
      <div className={contentBlock}>
        <search>검색</search>
        <Link href="/login">로그인/회원가입</Link>
      </div>
    </header>
  );
};

export default Header;
