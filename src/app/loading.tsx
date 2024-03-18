"use client";

import { Loader } from "@/components/loader";

const Loading = () => {
  return (
    <div className="flex h-[100vh] w-full items-center justify-center bg-white">
      <Loader />
    </div>
  );
};

export default Loading;
