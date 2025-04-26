"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing"

export const TopNav = () => {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
      <div>Gallery</div>

      <div className="flex flex-row">
          <SignedOut>
              <SignInButton></SignInButton>
          </SignedOut>
          <SignedIn>
              <UploadButton 
                endpoint="imageUpload"
                onClientUploadComplete={() => {
                  router.refresh();
                }}
              />
              <UserButton />
          </SignedIn>
      </div>
    </nav>
  )
}