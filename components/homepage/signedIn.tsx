"use client";

import { SignedIn } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Newspaper } from "lucide-react";
import { Input } from "../ui/input";
import Link from "next/link";
import Image from "next/image";
import CardComponent from "../card";
import Chnages from "../changes";

type Props = {};

const reposlink = [
  { link: "/", title: "git-user/new-repo" },
  { link: "/", title: "git-user/new-repo" },
  { link: "/", title: "git-user/new-repo" },
  { link: "/", title: "git-user/new-repo" },
];

const SignedInComponents = (props: Props) => {
  const router = useRouter();

  return (
    <SignedIn>
      <div className="w-full mx-auto p-4 overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[25%_75%] gap-6">
          {/* Sidebar / Top Repositories Section */}
          <div className="border-b md:border-r md:border-b-0 border-gray-300 pb-6 md:pb-0 md:pr-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-lg">Top Repositories</h2>
              <Button
                variant="outline"
                onClick={() => router.push("/new")}
                className="bg-green-500/90 hover:bg-green-400 px-3 py-2 text-sm">
                <Newspaper className="w-4 h-4 mr-2" />
                New
              </Button>
            </div>
            <Input className="w-full" placeholder="Search Repositories.." />
            {reposlink.map((repos, index) => (
              <div key={index} className="flex gap-2 mt-2">
                <Link href={repos.link} className="hover:underline flex gap-1">
                  <div className="bg--400 rounded-full p-1.5 flex items-center justify-center">
                    <Image
                      src="/github.svg"
                      alt="logo"
                      width={20}
                      height={20}
                    />
                  </div>
                  {repos.title}
                </Link>
              </div>
            ))}
          </div>

          {/* Main Content Section */}
          <div className="grid grid-cols-[60%_40%]">
            <div className="w-full grid grid-cols-2 max-w-xl">
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </div>
            <div className="rounded-md border border-gray-500 max-w-xs px-2 text-sm m-2">
              <h1 className="m-2 font-semibold">Latest Changes</h1>
              <Chnages />
              <Chnages />
              <Chnages />
              <Chnages />
            </div>
          </div>
        </div>
      </div>
    </SignedIn>
  );
};

export default SignedInComponents;
