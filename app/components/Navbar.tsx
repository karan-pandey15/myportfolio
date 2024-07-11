"use client";
import { useState } from "react";
import Link from 'next/link';
import Navlinks from "./Navlinks";

const Navbar = () => {
    const [navShow, setNavShow] = useState(false);

    return (
        <div className="bg-slate-900 px-10 pt-7 pb-6 text-white flex justify-between w-full fixed top-0 z-20">
            <div>
                <Link href="/">
                    <h1 className="text-2xl font-semibold underline lg:pl-20 cursor-pointer">Karan Pandey</h1>
                </Link>
            </div>  
            <div className="flex flex-col gap-1 sm:hidden cursor-pointer" onClick={() => {
                setNavShow(navShow => !navShow);
                document.body.style.overflow = navShow ? "visible" : "hidden";
            }}>
                <span className="w-8 h-1 bg-white rounded-sm"></span>
                <span className="w-8 h-1 bg-white rounded-sm"></span>
                <span className="w-8 h-1 bg-white rounded-sm"></span>
            </div>
            
            <div className="justify-end items-center gap-8 hidden sm:flex">
                <Navlinks />
            </div>
            <div className={`${navShow ? "block" : "hidden"} pt-20 px-4 z-10 absolute left-0 top-0 w-64 h-screen bg-slate-950 sm:hidden`}>
                <div className="flex flex-col gap-7 text-center">
                    <Link href="/">
                        <h1 className="text-3xl font-semibold underline cursor-pointer">Karan Pandey</h1>
                    </Link>
                    <Navlinks setNavShow={setNavShow} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
