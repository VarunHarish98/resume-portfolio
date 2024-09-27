import { heroButton, subTitle, title } from "@/utils/constants";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Landing = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-center -mt-10 items-center h-screen">
      <div className="bg-[#ffffff] text-[#0061ff] p-24 w-[75%] border-2 h-[75%] flex flex-col gap-8 justify-start items-start">
        <h1 className="font-bold  text-6xl">{title}</h1>
        <h2 className="text-3xl">{subTitle}</h2>
        <Button
          variant="outline"
          className="rounded-lg text-white bg-[#0061ff] p-6"
          onClick={() => handleLogin()}
        >
          {heroButton}
        </Button>
      </div>
    </div>
  );
};

export default Landing;
