"use client";

import Navbar from "@/components/common/Navbar";
import MyPortfolio from "@/components/dashboard/MyPortfolio";
import TokenOfferrings from "@/components/dashboard/TokenOfferrings";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen relative [background:linear-gradient(rgba(230,_232,_232,_0.4),_rgba(230,_232,_232,_0.4)),_#fcfdfd] overflow-hidden flex flex-col items-start justify-start font-proxima">
      <Navbar />
      <main className="w-11/12 md:w-5/6 lg:w-4/5 mx-auto flex flex-row items-start justify-center md:px-5 py-10">
        <section className="w-full lg:w-4/5 flex flex-col items-start justify-start gap-4 md:gap-8 max-w-full text-left text-2xl text-neutral-black-6 font-body-large-bold mq450:gap-[16px] ">
          <div className="self-stretch flex flex-col items-start justify-center">
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit">
                Hello User,
              </h3>
              <h3 className="text-base md:text-inherit self-stretch relative text-inherit tracking-tight text-neutral-black-4">
                Your Lympha assets have helped remove 5 tons of CO2e. Thats
                equivalent to recycling 712,837 plastic bottles. Great work!
              </h3>
            </div>
          </div>
          <MyPortfolio />

          <TokenOfferrings />

          <div className="w-full h-20 px-6 py-5 bg-neutral-black-4/5 rounded-3xl justify-between items-center inline-flex">
            <div className="w-96 flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="text-gray-600 text-lg font-normal font-['Proxima Nova'] leading-relaxed">
                You have an investment opportunity?
              </div>
            </div>
            <Link
              href="/list-projects"
              className="w-36 px-6 py-2 bg-lympha-primary whitespace-nowrap rounded-3xl shadow border-2 border-emerald-900/opacity-10 justify-center items-center gap-2 flex"
            >
              <div className="text-white text-base">List a project</div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
