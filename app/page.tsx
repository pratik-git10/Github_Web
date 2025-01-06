import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex justify-center items-center mt-20">
      {/* Here made two diffrent components. */}
      <SignedOut>
        <div className="">Github</div>
      </SignedOut>

      <SignedIn></SignedIn>
    </div>
  );
}
