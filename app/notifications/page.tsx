"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Bookmark, CheckIcon, Inbox, Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const links = [
  { title: "Inbox", href: "/notifications", icons: <Inbox size={15} /> },
  {
    title: "Saved",
    href: "/notifications?query={dynamic}",
    icons: <Bookmark size={15} />,
  },
  { title: "Done", href: "/notifications?new", icons: <CheckIcon size={15} /> },
];

const filters = [
  { title: "assigned", href: "/notifications", icons: <Inbox size={15} /> },
  {
    title: "newassigned",
    href: "/notifications?query={dynamic}",
    icons: <Bookmark size={15} />,
  },

  {
    title: "newrecent",
    href: "/notifications?new",
    icons: <CheckIcon size={15} />,
  },
];

const allHandler = {};

const NotificationPage = (props: Props) => {
  const [active, setActive] = useState("Inbox");

  const handleLinkClick = (title: string) => {
    setActive(title);
  };

  return (
    <div className="grid md:grid-cols-[20%_80%]">
      <div className="flex flex-col gap-2 p-4">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className={`p-1.5 flex items-center gap-2 rounded-md hover:bg-black/20 ${
              active === link.title ? "bg-black/20" : ""
            }`}
            onClick={() => handleLinkClick(link.title)}>
            {link.icons}
            {link.title}
          </Link>
        ))}
        <Separator className="bg-gray-500 w-40" />
        {filters.map((filter) => (
          <Link
            key={filter.title}
            href={filter.href}
            className={`p-1.5 flex items-center gap-2 rounded-md hover:bg-black/20 ${
              active === filter.title ? "bg-black/20" : ""
            }`}
            onClick={() => handleLinkClick(filter.title)}>
            {filter.icons}
            {filter.title}
          </Link>
        ))}
      </div>
      <div className="bg-300 ">
        <div className="p-1.5 flex justify-center items-center">
          <Button
            onClick={() => {}}
            variant="outline"
            className=" rounded-md rounded-r-none">
            All
          </Button>
          <Button variant="outline" className="rounded-md rounded-l-none">
            Unread
          </Button>

          <div className="flex items-center ml-2 border border-gray-200 rounded-md">
            <Search className="p-1" />
            <Input
              type="text"
              placeholder="Search Notification"
              className="outline-none border-0 bg--400 "
              size={90}></Input>
          </div>
          <Button className="m-2" variant="outline">
            Group by:Date
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
