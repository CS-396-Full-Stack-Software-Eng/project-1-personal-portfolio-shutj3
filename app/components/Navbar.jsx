"use client";
import React, {useState} from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import {HomeIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MobileMenu from "./MobileMenu";
import { useRouter } from 'next/navigation';
import Theme from "./Theme";


const navLinks = [
    {
        title: "About",
        path: "About",
    },

    {
        title: "Contact",
        path: "Contact", 
    },

];

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);
    const router = useRouter()

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-indigo-200 bg-opacity-95">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-3">
                <Link href={"/"}>
                    <HomeIcon className="h-6 w-6 hover:stroke-indigo-400" />
                </Link>
                
                <Theme />
               
            
                <div className="mobile-menu block md:hidden">
                    {!openNavbar ? (
                        <button
                            onClick={() => setOpenNavbar(true)}
                            className="flex items-center px-3 py-2 hover:text-indigo-500 "
                        >
                            <Bars3Icon className="h-5 w-5" />
                         </button>
                    ):(
                        <button 
                            onClick={() => setOpenNavbar(false)}
                            className="flex items-center px-3 py-2 hover:text-indigo-500 "
                        >
                        <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto font-['ui-serif']" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))
                    }
                    </ul>
                </div>
            </div>
            {openNavbar ? <MobileMenu links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;