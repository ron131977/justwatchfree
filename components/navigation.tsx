// import Link from "next/link"
// import { Search } from 'lucide-react'
// import { Input } from "@/components/ui/input"

// export function Navigation() {
//   return (
//     <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-14 items-center">
//         <Link href="/" className="flex items-center space-x-2">
//           <span className="font-bold">JustWatch Free</span>
//         </Link>
//         <div className="flex items-center space-x-4 mx-6">

//           <Link href="/movies" className="text-sm font-medium hover:no-underline">
//             Movies
//           </Link>
//           <Link href="/series" className="text-sm font-medium hover:no-underline">
//            Tv Series
//           </Link>
//           <Link href="/adult" className="text-sm font-medium hover:no-underline">
//             Adult
//           </Link>
//           <Link href="/blog" className="text-sm font-medium hover:no-underline">
//             Blog
//           </Link>
//           <Link href="/admin" className="text-sm font-medium hover:no-underline">
//             Admin
//           </Link>
//         </div>
//         <div className="flex-1 flex items-center space-x-2">
//           <div className="relative w-full max-w-sm">
//             <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//             <Input placeholder="Search videos..." className="pl-8" />
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";


export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between ">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 ml-2">
          <span className="font-bold text-xl">JustWatch Free</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4 ml-2">
          <Link href="/series" className="text-sm font-medium hover:no-underline">
            Tv Series
          </Link>
          <Link href="/movies" className="text-sm font-medium hover:no-underline">
            Movies
          </Link>
          <Link href="/adult" className="text-sm font-medium hover:no-underline">
            Adult
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:no-underline">
            Blog Post
          </Link>
          {/* <Link href="/admin" className="text-sm font-medium hover:no-underline">
            Admin
          </Link> */}
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex flex-1 items-center space-x-2 ml-2">
          <div className="relative w-half max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search videos..." className="pl-8" />
          </div>
        </div>
      </div>
 
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-4 py-4 border-t bg-background">
          <Link href="/series" className="text-sm font-medium hover:no-underline" onClick={() => setIsOpen(false)}>
            Tv Series
          </Link>
          <Link href="/movies" className="text-sm font-medium hover:no-underline" onClick={() => setIsOpen(false)}>
            Movies
          </Link>
          <Link href="/adult" className="text-sm font-medium hover:no-underline" onClick={() => setIsOpen(false)}>
            Adult
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:no-underline">
            Blog Post
          </Link>
          {/* <Link href="/admin" className="text-sm font-medium hover:no-underline">
            Admin
          </Link> */}

          {/* Search Bar (Mobile) */}
          <div className="w-half max-w-sm px-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search videos..." className="pl-8" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
