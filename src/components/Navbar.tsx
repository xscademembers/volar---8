import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-500 rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
          </div>
          <span className="font-display font-bold text-xl tracking-tight">VOLAR ALTA</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#platform" className="hover:text-white transition-colors">Platform</a>
          <a href="#industries" className="hover:text-white transition-colors">Industries</a>
          <a href="#impact" className="hover:text-white transition-colors">Impact</a>
          <a href="#company" className="hover:text-white transition-colors">Company</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium hover:text-white transition-colors">Log In</button>
          <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
            Book Demo
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
