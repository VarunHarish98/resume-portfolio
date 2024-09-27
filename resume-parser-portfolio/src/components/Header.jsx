import React from "react";
import { buttonNames } from "../utils/constants";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="p-2 flex justify-between items-center">
      <div>
        <img src={logo} className="w-16 h-16" alt="Portfome" />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex gap-4 text-[#0061ff]">
          {buttonNames.map((button, index) => (
            <div key={index}>{button}</div>
          ))}
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="bg-[#0061ff] text-white rounded-lg w-full"
            onClick={() => handleSignInClick()}
            disabled
          >
            Sign In
          </Button>
          <Button
            variant="outline"
            className="bg-[#0061ff] text-white rounded-lg w-full"
            onClick={() => handleSignInClick()}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
