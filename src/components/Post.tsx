import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bookmark, Ellipsis, Heart, MessageCircle, Send } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const Post = () => {
  return (
    <section className=" space-y-3 pt-4 pb-5 border-b">
      <div className="flex items-center space-x-3">
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

        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Ellipsis />
                </TooltipTrigger>
                <TooltipContent>
                  <p>More Options</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className=" bg-slate-500 w-full h-[500px]"></div>
      <div className="flex px-1">
        <div className="grow flex space-x-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex cursor-pointer">
                  <Heart />
                  1.1k
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Like</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex cursor-pointer">
                  <MessageCircle />
                  1.1k
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Comment</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex cursor-pointer">
                  <Send />
                  1.1k
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild className="cursor-pointer">
              <Bookmark />
            </TooltipTrigger>
            <TooltipContent>
              <p>Save</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div>
        Jinghong City in Xishuangbanna Dai Autonomous Prefecture has held a
        dragon boat race in the Lancang River as part of its annual
        water-splashing festival celebrations, attracting 20,000 to 30,000
        tourists from home and abroad to watch the race. A total of 12 teams
        from local towns and villages competed in the event, among which four
        were made up of female rowers. #ChinainLens For more:
        https://english.cctv.com/
      </div>
    </section>
  );
};

export default Post;
