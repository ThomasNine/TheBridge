import BottomNav from "@/components/BottomNav";
import LeftSideNav from "@/components/LeftSideNav";
import MainFeed from "@/components/MainFeed";
import RightSideNav from "@/components/RightSideNav";
import TopNav from "@/components/TopNav";

export default function Home() {
  return (
    <main className="relative ">
      <TopNav />
      <section className="flex min-h-screen item-start relative ">
        <LeftSideNav />
        <div className=" sm:ml-[75px] xl:ml-[320px] grow flex justify-around items-start min-h-screen">
          <MainFeed />
          <RightSideNav />
        </div>
      </section>
      <BottomNav />
    </main>
  );
}
