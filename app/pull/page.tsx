import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, GitPullRequest } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const PullReqPage = (props: Props) => {
  return (
    <div className="max-w-4xl mx-auto m-5 p-2 ">
      <div className="flex bg--400">
        <Button variant="outline" className="rounded-r-none border-gray-500">
          Created
        </Button>
        <Button variant="outline" className="rounded-none border-gray-500">
          Assigned
        </Button>
        <Button variant="outline" className="rounded-none border-gray-500">
          Mentioned
        </Button>
        <Button variant="outline" className="rounded-l-none border-gray-500">
          Review request
        </Button>
        <Input
          type="search"
          className="border border-gray-500 outline-none ml-10"
          placeholder="Search.."
        />
      </div>

      <div className="rounded-t-md mt-5 border border-gray-500 p-5 flex gap-2">
        <Link href="/issues" className="flex items-center ">
          <GitPullRequest size={15} />
          <p className="ml-1">0 Open</p>
        </Link>
        <Link href="/issues" className="flex items-center">
          <Check size={15} />
          <p className="ml-1">0 Open</p>
        </Link>
      </div>
      <div className="rounded-b-md border border-t-0 border-gray-500 h-64 ">
        <div className="flex flex-col justify-center items-center h-full">
          <GitPullRequest size={15} />
          <h1>No results matched your search.</h1>
          <p className="">
            You could search all of GitHub or try an advanced search.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PullReqPage;
