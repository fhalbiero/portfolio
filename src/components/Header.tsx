import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <Logo />
            {/* Desktop nav and hire me button */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <Button>Hire me</Button>
                </Link>
            </div>
            {/* Mobile nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}
