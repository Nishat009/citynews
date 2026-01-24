"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";
import { navItems } from "../data/cityNewsData";
import NavDropdown from "./NavDropDown";
import SocialIcons from "./SocialIcons";
import desktopLogo from "@/public/image/logo.png";
import mobileLogo from "@/public/image/logo_mobile@2x.png";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isLg, setIsLg] = useState(false);
    useEffect(() => {
        const checkScreen = () => setIsLg(window.innerWidth >= 1024);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    useEffect(() => {
        if (isLg) {
            setIsMobileOpen(false);
        }
    }, [isLg]);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileOpen]);

    return (
        <>
            <header
                className={`top-0 left-0 right-0 z-[10000] transition-all duration-300 ${isScrolled
                        ? "lg:bg-white lg:shadow-md"
                        : "bg-white/90 backdrop-blur-lg"
                    }`}
            >
                <div className="px-4">
                    <div className="relative h-[70px] flex items-center justify-center lg:border-b">
                        <Link href="/">
                            {isLg ? (
                                <Image
                                    src={desktopLogo}
                                    alt="The Downtown"
                                    width={180}
                                    height={40}
                                    priority
                                />
                            ) : (
                                <Image
                                    src={mobileLogo}
                                    alt="The Downtown"
                                    width={140}
                                    height={40}
                                    priority
                                />
                            )}
                        </Link>
                        <button
                            className="lg:hidden absolute top-5 left-5"
                            onClick={() => setIsMobileOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex justify-center my-3 max-w-[1380px] mx-auto">
                        <nav className="flex items-center space-x-2">
                            {navItems.map((item) => (
                                <NavDropdown
                                    key={item.label}
                                    label={item.label}
                                    href={"href" in item ? item.href : undefined}
                                    submenu={"submenu" in item ? item.submenu : undefined}
                                />
                            ))}
                        </nav>
                    </div>
                </div>
            </header>
            <>
                <div
                    className={`fixed inset-0 bg-black/70 z-[9999] transition-opacity duration-500 ease-in-out ${isMobileOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                        }`}
                    onClick={() => setIsMobileOpen(false)}
                />
                <button
                    className={`fixed top-5 right-5 z-[10001] transition-opacity duration-500 ease-in-out ${isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                    onClick={() => setIsMobileOpen(false)}
                    aria-label="Close menu"
                >
                    <X className="w-7 h-7 text-gray-300" />
                </button>
                <div
                    className={`fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-[10000]
            transform transition-transform duration-500 ease-in-out
            ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          `}
                >
                    <div className="p-6 overflow-y-auto h-full">
                        <div className="relative mb-6">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full border rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                            <Search className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                        </div>
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-lg font-bold text-[#212121]"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-8">
                            <SocialIcons />
                        </div>
                        <p className="text-[#757575] text-xs mt-5">
                            © 2026{" "}
                            <Link href="/" className="border-b border-[#aaa]">
                                JNews
                            </Link>{" "}
                            – Premium WordPress news & magazine theme by{" "}
                            <Link href="/" className="border-b border-[#aaa]">
                                Jegtheme
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </>
        </>
    );
}
