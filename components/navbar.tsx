"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  CircleDot,
  GitPullRequest,
  Inbox,
  Menu,
  Plus,
} from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const links = [
  { title: "New Repository", href: "/new" },
  { title: "Import Repository", href: "/" },
  { title: "New Project", href: "/" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
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

  const handleClick = () => {
    router.push("/pull");
  };

  return (
    <div className="p-4 flex items-center border-b border-gray-500 justify-between">
      <div className="flex items-center justify-center gap-2">
        <SignedIn>
          <Button
            variant="outline"
            className="border border-gray-500 p-2.5 flex justify-center items-center"
          >
            <Menu />
          </Button>
        </SignedIn>
        <Link href="/" className="p-0.5">
          <Image
            src="/github.svg"
            alt="logo"
            width={30}
            height={20}
            className="bg- rounded-full  bg-white p-1"
          />
        </Link>
        <SignedIn>
          <Link
            href="/"
            className="bg--500 p-1 hover:bg-black/20 rounded-md transition ease-in-out"
          >
            Dashboard
          </Link>
        </SignedIn>
      </div>

      <div className="flex items-center justify-end gap-2">
        {/* <CommandDialogDemo /> */}
        <SignedIn>
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
              <Plus />
              <ChevronDown />
            </Button>

            {isOpen && (
              <div className="absolute mt-2 w-36 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg outline-none flex justify-center items-center">
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

          <Button variant="outline" onClick={() => router.push("/issues")}>
            <CircleDot />
          </Button>
          <Button variant="outline" onClick={handleClick}>
            <GitPullRequest />
          </Button>
          <Link href="/notifications">
            <Button variant="outline">
              <Inbox />
            </Button>
          </Link>
        </SignedIn>

        <div className="flex justify-center items-center">
          <SignedOut>
            <SignInButton forceRedirectUrl="/">
              <Button variant="outline">Login</Button>
            </SignInButton>
            <SignUpButton>
              <Button variant="outline" className="ml-1">
                Signup
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
