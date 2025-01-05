import { SignIn } from "@clerk/nextjs";
import React from "react";

type Props = {};

const SignInPage = (props: Props) => {
  return (
    <div className="flex justify-center items-center">
      <SignIn />
    </div>
  );
};

export default SignInPage;
