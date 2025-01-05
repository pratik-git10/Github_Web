"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  CircleDot,
  GitPullRequest,
  Menu,
  Package2,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { CommandDialogDemo } from "./searchbar";

const links = [
  { title: "New Repository", href: "/new" },
  { title: "Import Repository", href: "/" },
  { title: "New Project", href: "/" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#F0F6FC] p-4 flex items-center border-b border-gray-500 justify-between">
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="outline"
          className="border border-gray-500 p-2.5 flex justify-center items-center"
        >
          <Menu />
        </Button>
        <Link href="/" className="p-0.5">
          <Image
            src="/github.svg"
            alt="logo"
            width={30}
            height={20}
            className="bg- rounded-full text-black p-1"
          />
        </Link>
        <Link href="/" className="bg--500 p-0.5">
          Dashboard
        </Link>
      </div>

      <div className="flex items-center justify-end gap-2">
        <CommandDialogDemo />

        <div className="relative inline-block text-left" ref={dropdownRef}>
          <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
            <Plus />
            <ChevronDown />
          </Button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg outline-none">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        <Button variant="outline">
          <CircleDot />
        </Button>
        <Button variant="outline">
          <GitPullRequest />
        </Button>
        <Button variant="outline">
          <Package2 />
        </Button>
        <SignedOut>
          <div className="bg-gray-300 p-1 rounded-md">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
