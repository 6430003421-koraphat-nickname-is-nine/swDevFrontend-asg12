"use client";

import VideoPlayer from "./VideoPlayer";

import { useState } from "react";
import { useWindowListener } from "@/hooks/useWindowListener";

export default function PromoteCard() {
  const [playing, setPlaying] = useState(true);

  useWindowListener("contextmenu", (e) => {
    e.preventDefault();
  });

  return (
    <div className="w-[80%] bg-white p-[24px] flex flex-row rounded-[24px] justify-around  border-2 border-lime-500">
      <VideoPlayer vdoSrc="/vdo/getvaccine.mp4" isPlaying={playing} />

      <div className="h-[100%] w-[50%] p-[8px] relative">
        <div className="text-[24px] px-[16px] py-[16px] font-bold  text-black">
          Get your vaccine today.
        </div>
        <button
          className="m-[4px] p-[4px] text-[16px] rounded-[8px] absolute bottom-[4px]
            border-2 border-lime-900 bg-lime-300 px-4 py-4 text-black hover:bg-lime-600 hover:font-bold hover:text-white hover:border-0"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
