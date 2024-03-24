"use client";
import { Loader } from "@/components/loader";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div className="p-4 h-[80vh] sm:h-[70vh] flex items-center m-auto justify-between sm:justify-center">
      {/* BOX */}
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2 ">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2   justify-center ">
          <h1 className="font-bold text-xl xl:text-6xl">Welcome</h1>
          <p className="xl:text-2xl">
            Log into your account or create a new one using social buttons
          </p>
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md"
          >
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            {/* Have a problem?<Link className="underline" href="/"> Contact us</Link> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
