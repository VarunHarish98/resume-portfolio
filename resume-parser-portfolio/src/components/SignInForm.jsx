import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import googleLogo from "../assets/google.png";
import facebookLogo from "../assets/facebook.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { SignUpForm } from ".";
import { websiteName } from "@/utils/constants";

export const Forms = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSignIn = () => {
    setSignIn(!signIn);
  };
  return signIn ? (
    <Card className="w-[350px]">
      <CardHeader className="items-center flex">
        <CardTitle>Sign in to {websiteName}</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                className="bg-white"
                placeholder="jane@gmail.com"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Password">Password</Label>
              <div className="flex items-center relative justify-end">
                <Input
                  id="Password"
                  className="bg-white flex-grow"
                  placeholder="jane@gmail.com"
                  type={showPassword ? "text" : "password"}
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="absolute mr-2 w-4 h-4"
                  onClick={() => handleShowPassword()}
                />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardDescription
        onClick={() => handleSignIn()}
        className="text-[#0061ff] cursor-pointer -mt-4 mb-2 px-6 flex justify-end font-semibold"
      >
        New User? Create Account
      </CardDescription>
      <CardFooter className="flex justify-center">
        <Button
          variant="outline"
          className="w-full bg-[#0061ff] text-white rounded-lg"
        >
          Log in
        </Button>
      </CardFooter>

      {/* To - DO
      Integrate Social Media Login details like Google and Facebook */}

      {/* <div className="px-6 flex items-center text-gray-400 gap-1 mb-4">
        <div className="h-[0.5px] bg-gray-400 w-24 bg-black"></div>
        <div className="text-xs ">Or continue with</div>
        <div className="h-[0.5px] w-24 bg-black bg-gray-400"></div>
      </div>
      <CardFooter className="flex justify-center flex-col gap-4">
        <Button
          variant="outline"
          className="w-full border-[#0061ff] text-[#0061ff] rounded-lg"
        >
          <span>
            <img className="w-8" src={googleLogo}></img>
          </span>
          Sign in with Google
        </Button>
        <Button
          variant="outline"
          className="w-full border-[#0061ff] text-[#0061ff] rounded-lg"
        >
          <span>
            <img className="w-6 mx-2" src={facebookLogo}></img>
          </span>
          Sign in with Facebook
        </Button>
      </CardFooter> */}
    </Card>
  ) : (
    <SignUpForm />
  );
};

export default Forms;
