import React from "react";
import { IMGMoreInfoIcon, IMGPlayIcon } from "../assets";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[22%] px-20 absolute text-white bg-gradient-to-r from-black/70 to-transparent">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-4 ">
        <button className="bg-white justify-center flex gap-2 hover:bg-gray-300 text-black font-bold px-4 py-3 rounded cursor-pointer">
          <img src={IMGPlayIcon} alt="play-icon" />
          Play
        </button>
        <button className="bg-[rgba(109,109,110,0.7)] flex gap-2 justify-center hover:bg-[rgba(109,109,110,0.7)]/70 text-white font-bold py-3 px-4 rounded cursor-pointer bg-opacity-50">
          <img src={IMGMoreInfoIcon} alt="more-info-icon" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
