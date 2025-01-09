"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Logo } from "./Logo";

const LINKS = [
    { path: "/", label: "Home" },
    { path: "/services", label: "services" },
    { path: "/resume", label: "resume" },
    { path: "/work", label: "work" },
    { path: "/contact", label: "contact" },
]

export default function MobileNav() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-24 mb-24 text-center">
                    <Logo size="sm" />
                </div>
                <nav className="flex flex-col gap-4 justify-center items-center">
                    {LINKS.map((link) => (
                        <Link  
                            className={`
                                ${link.path === pathname && 
                                    "text-accent border-b-2 border-accent"
                                }
                                capitalize font-medium hover:text-accent transition-all
                            `}  
                            href={link.path} 
                            key={link.path}
                        >
                        {link.label}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}
