import React from "react";
import Banner from "./Banner";
import Highest from "./Highest";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="">
      <Banner />
      {/* highest rated reviews */}
      <Highest data={data} />
      {/* trending now */}
      <section className="px-6 py-10 text-white bg-[#0e1525]">
        <h2 className="text-3xl font-bold mb-4 text-center">🔥 Trending Now</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
          These games are making waves in the community with exciting gameplay
          and unforgettable moments.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-[#1e1e2f] p-4 rounded-xl shadow hover:scale-105 transition-all">
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg"
              alt="CS2"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Counter-Strike 2</h3>
            <p className="text-sm text-gray-400">
              The classic shooter returns with enhanced graphics and tactical
              precision. Get ready for intense action!
            </p>
          </div>
          <div className="bg-[#1e1e2f] p-4 rounded-xl shadow hover:scale-105 transition-all">
            <img
              src="https://cdn.akamai.steamstatic.com/steam/apps/1938090/header.jpg"
              alt="Modern Warfare"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Modern Warfare III</h3>
            <p className="text-sm text-gray-400">
              A cinematic campaign and thrilling multiplayer await in this
              blockbuster FPS.
            </p>
          </div>
          <div className="bg-[#1e1e2f] p-4 rounded-xl shadow hover:scale-105 transition-all">
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/header.jpg"
              alt="Resident Evil 4"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Resident Evil 4 Remake</h3>
            <p className="text-sm text-gray-400">
              A masterfully reimagined horror experience with stunning visuals
              and tight mechanics.
            </p>
          </div>
        </div>
      </section>
      {/* chill picks */}
      <section className="px-6 py-10 bg-[#0e1525] text-white">
        <h2 className="text-3xl font-bold mb-4 text-center">
          🧊 Chill Picks – Relax & Play
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
          Need a break from the grind? These relaxing games are perfect for
          kicking back and enjoying a peaceful session.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-[#1e1e2f] p-4 rounded-xl shadow hover:scale-105 transition-all">
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg"
              alt="Stardew Valley"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Stardew Valley</h3>
            <p className="text-sm text-gray-400">
              Farm, fish, and make friends in this beloved life sim. Pure cozy
              vibes.
            </p>
          </div>
          <div className="bg-[#1e1e2f] p-4 rounded-xl shadow hover:scale-105 transition-all">
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/835960/header.jpg"
              alt="Spiritfarer"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Spiritfarer</h3>
            <p className="text-sm text-gray-400">
              A beautifully emotional journey about helping spirits move on —
              with gentle management gameplay.
            </p>
          </div>
          <div className="bg-[#1e1e2f] p-4 rounded-xl shadow hover:scale-105 transition-all">
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/219890/header.jpg"
              alt="Journey"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Journey</h3>
            <p className="text-sm text-gray-400">
              Travel through a stunning desert landscape in a meditative,
              story-rich experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
