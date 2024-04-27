import { Bell, CircleUser, Home, Search, Send, SquarePlus } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const LeftSideNav = () => {
  const sideNavItem = [
    { title: "Home", icon: Home },
    { title: "Explore", icon: Search },
    { title: "Notifications", icon: Bell },
    { title: "Message", icon: Send },
    { title: "Create", icon: SquarePlus },
    { title: "Profile", icon: CircleUser },
  ];

  return (
    <nav className="hidden sm:block min-w-[75px] lg:w-[75px] xl:w-[320px] p-3 h-screen border-r fixed">
      <div className=" w-full flex justify-center py-4">
        <Link
          href="/"
          className="flex items-center text-[#219ebc] text-3xl font-bold font-['Great_Vites'] space-x-1"
        >
          <span className=" text-5xl">S</span>
          <span className=" hidden xl:block">torie</span>
        </Link>
      </div>
      <div className="w-full flex flex-col gap-y-3">
        {sideNavItem.map((i) => (
          <Link href={i.title.toLowerCase()} key={i.title}>
            <Button
              variant="ghost"
              className="hidden w-full xl:flex justify-start items-center text-base space-x-3 py-[26px]"
            >
              <i.icon size={28} strokeWidth={2} />
              <p className="hidden lg:block">{i.title}</p>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              title={i.title}
              className="flex xl:hidden w-full justify-center items-center py-[26px]"
            >
              <i.icon size={28} strokeWidth={2} />
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default LeftSideNav;
