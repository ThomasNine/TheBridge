"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RightSideNav = () => {
  const router = useRouter();
  const [follow, setFollow] = useState(false);
  const cardLinkFn = () => {
    router.push("abc");
  };
  const handleFollow = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setFollow(!follow);
  };
  return (
    <div className="hidden lg:block w-[320px] sticky top-20 mt-20">
      <Card onClick={cardLinkFn}>
        <CardHeader>
          <CardTitle>Who to follow</CardTitle>
        </CardHeader>
        <CardContent className=" space-y-3">
          <div className="flex justify-between items-center">
            <div className="grow flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="/">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>User</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="">
                <Link href="/">
                  <h1>Name</h1>
                </Link>
                {true && <p className=" text-xs">Sponsored</p>}
              </div>
            </div>
            <Button onClick={handleFollow} className=" rounded-full">
              {follow ? "Followed" : "Follow"}
            </Button>
            {/* more btn  */}
          </div>
          <div className="flex justify-between items-center">
            <div className="grow flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="/">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>User</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="">
                <Link href="/">
                  <h1>Name</h1>
                </Link>
                {true && <p className=" text-xs">Sponsored</p>}
              </div>
            </div>
            <Button className=" rounded-full">Follow</Button>
          </div>
          <div className="flex justify-between items-center">
            <div className="grow flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="/">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>User</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="">
                <Link href="/">
                  <h1>Name</h1>
                </Link>
                {true && <p className=" text-xs">Sponsored</p>}
              </div>
            </div>
            <Button className=" rounded-full">Follow</Button>
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="p-0  ">
          <Button variant="ghost" className="w-full">
            Show more
          </Button>
        </CardFooter>
      </Card>
      <section className="flex flex-wrap mt-5">
        <Link href="/">
          <Button variant="link" className=" opacity-70" size="sm">
            Term of Services
          </Button>
        </Link>
        <Link href="/">
          <Button variant="link" className=" opacity-70" size="sm">
            Term of Services
          </Button>
        </Link>
        <Link href="/">
          <Button variant="link" className=" opacity-70" size="sm">
            Term of Services
          </Button>
        </Link>
        <Link href="/">
          <Button variant="link" className=" opacity-70" size="sm">
            Term of Services
          </Button>
        </Link>
        <Link href="/">
          <Button variant="link" className=" opacity-70" size="sm">
            Term of Services
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default RightSideNav;
