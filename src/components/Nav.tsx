"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
    { path: "/", label: "Home" },
    { path: "/services", label: "services" },
    { path: "/resume", label: "resume" },
    { path: "/work", label: "work" },
]

export default function Nav() {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
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
    )
}
