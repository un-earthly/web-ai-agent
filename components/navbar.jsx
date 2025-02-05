"use client";
import { Button } from "./ui/button"
import {  Menu, Shrink } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const sections = [
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'about', label: 'About' },
  { id: 'security', label: 'Security' }
];
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-black/95 border-purple-500/20">
        <nav className="flex flex-col gap-4">
          {sections.map((section) => (
            <SheetClose asChild key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-purple-500/20"
              >
                {section.label}
              </a>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

function NavLink({
  href,
  children
}) {
  return (
    (<Link
      href={href}
      className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </Link>)
  );
}

export default function Navbar() {
  return (
    (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          // Slower and smoother transition
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center justify-between px-6 py-4 backdrop-blur-sm sticky top-0  border-b border-white/10">
          <Link href="/" className="flex items-center space-x-2">
            <Shrink className="w-8 h-8 text-purple-500" />
            <span className="text-white font-medium text-xl">Drass</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/features">Features</NavLink>
            <NavLink href="/how-it-works">How it Works</NavLink>
            <NavLink href="/examples">Examples</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-purple-400">
              Sign In
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </motion.nav>
    )
  );
}

