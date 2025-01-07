import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, CircleAlert, Lock, Newspaper } from "lucide-react";
import React from "react";

type Props = {};

const NewRepoPage = (props: Props) => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg--500 my-2">
      <h1 className="text-2xl">Create a new Repository</h1>
      <p className="text-sm text-muted-foreground">
        A repository contains all project files, including the revision history.
        Already have a project repository elsewhere?
      </p>
      <Separator className="my-2 bg-gray-400" />
      <p className="">Required fields are marked with an asterisk (*).</p>
      <div className="flex my-2 text-lg gap-x-20">
        <p>Owner*</p>
        <p>Repository name*</p>
      </div>
      <div className="flex gap-x-14">
        <Button variant="outline" className="">
          {/* dynamic changes */}
          User
          <ChevronDown />
        </Button>
        <Input type="text" className="flex max-w-fit border border-black" />
      </div>
      <p className="my-2 text-sm">
        Great repository names are short and memorable.
      </p>
      <p>
        Descrtiption{" "}
        <span className="text-xs text-muted-foreground">(Optional)</span>
      </p>
      <Input className="" type="text" />
      <Separator className="my-4 bg-gray-400" />
      <div className="">
        <div className="flex gap-2 items-center my-2">
          <Input type="radio" className="w-5" defaultChecked />
          <Newspaper />
          <div>
            <p className="text-sm">Public</p>
            <p className="text-xs">
              Anyone on the internet can see this repository. You choose who can
              commit.
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Input type="radio" className="w-5" />

          <Lock />
          <div>
            <p className="text-sm">Private</p>
            <p className="text-xs">
              You choose who can see and commit to this repository.
            </p>
          </div>
        </div>
      </div>
      <Separator className="my-4 bg-gray-400" />
      <div className="text-muted-foreground flex gap-2">
        <CircleAlert />
        You are creating a public repository in your personal account.
      </div>
      <Separator className="my-4 bg-gray-400" />
      <div className="flex justify-end">
        <Button className="bg-green-500 text-black hover:bg-green-600">
          Create Repository
        </Button>
      </div>
    </div>
  );
};

export default NewRepoPage;
