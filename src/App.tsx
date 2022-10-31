import React from "react";
import { ActivityLogo } from "./assets";
import Card from "./components/card";

function App() {
  return (
    <main className="min-h-screen w-full bg-[#14172B] py-24 px-5">
      <div className="flex items-center">
        <img
          src={ActivityLogo}
          className="h-[16px] w-[16px]"
          alt="activity indicator"
        />
        <p className="font-semibold ml-4 text-[#ECF0FF] text-[16px]">
          Trending assets
        </p>
      </div>
      <section className="m-20 flex flex-wrap">
        {Array(5)
          .fill(null)
          .map((item) => (
            <Card />
          ))}
      </section>
    </main>
  );
}

export default App;
