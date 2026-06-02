import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { IMGBackgroundImg } from "../assets";

const GPTSearch = () => {
  return (
    <div>
      <div className="flex ">
        <img
          className=" w-full h-[100vh] object-cover absolute"
          src={IMGBackgroundImg}
          alt="background-image"
        />
        <div className="fixed bg-black opacity-30 w-full h-full"></div>
      </div>
      <div className="relative z-10">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </div>
  );
};

export default GPTSearch;
