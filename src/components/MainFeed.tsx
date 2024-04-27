import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Post from "./Post";

const MainFeed = () => {
  return (
    <section className="h-full w-[630px] relative">
      <section className=" border sticky top-0 bg-white/90">
        <Link href="/">
          <Button variant="ghost" className=" w-1/2 text-base py-5">
            For you
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost" className=" w-1/2 text-base py-5">
            Following
          </Button>
        </Link>
      </section>

      <section className="">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </section>
    </section>
  );
};

export default MainFeed;
