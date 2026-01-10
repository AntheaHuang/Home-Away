"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

function SignOutLink() {
  const handleLogout = () => {
    toast.info("You have been logged out.");
  };
  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full text-left" onClick={handleLogout}>
        Log Out
      </button>
    </SignOutButton>
  );
}

export default SignOutLink;
