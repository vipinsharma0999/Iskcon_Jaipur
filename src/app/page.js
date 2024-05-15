import Hero from "@/components/Home/Hero/Hero";
import HomeData from "@/components/Home/HomeData/HomeData";
import HomeCalender from "@/components/Home/HomeCalender/HomeCalender";
import HomeCarousel from "@/components/Home/HomeCarousel/HomeCarousel";
import HomePrabhupada from "@/components/Home/HomePrabhupada/HomePrabhupada";
import HomeDarshan from "@/components/Home/HomeDarshan/HomeDarshan";
import HomeSchedule from "@/components/Home/HomeSchedule/HomeSchedule";
import HomeExplore from "@/components/Home/HomeExplore/HomeExplore";
import HomeServices from "@/components/Home/HomeServices/HomeServices";
import HomeDonate from "@/components/Home/HomeDonate/HomeDonate";
import HomeActivities from "@/components/Home/HomeActivities/HomeActivities";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <HomeData />
      <div className="flex flex-col-reverse md:flex-row bg-gray-100">
        <HomeCarousel />
        <HomeCalender />
      </div>
      <HomePrabhupada />
      <HomeDarshan />
      <HomeSchedule />
      <HomeExplore />
      <HomeServices />
      <HomeDonate />
      <HomeActivities />
    </main>
  );
}
