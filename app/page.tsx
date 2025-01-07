import SignedInComponents from "@/components/homepage/signedIn";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="">
      {/* Here made two diffrent components. */}
      <SignedOut>
        <div className="flex flex-col justify-center items-center max-w-3xl mx-auto h-screen">
          <p>This is a clone of Github</p>
          <p>Only UI part.</p>
        </div>
      </SignedOut>

      <SignedInComponents />
    </div>
  );
}
