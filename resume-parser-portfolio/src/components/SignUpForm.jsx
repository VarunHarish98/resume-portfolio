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
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
const SignUpForm = () => {
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex -mt-12 items-center justify-center w-screen h-screen">
      <Card className="w-[500px]">
        <CardHeader className="items-center">
          <CardTitle>Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex gap-4">
                <div className="flex w-1/2 flex-col space-y-1.5">
                  <Label htmlFor="email">First Name</Label>
                  <Input id="text" className="bg-white" placeholder="John" />
                </div>
                <div className="flex flex-col w-1/2 space-y-1.5">
                  <Label htmlFor="email">Last Name</Label>
                  <Input id="text" className="bg-white" placeholder="Doe" />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Contact Number</Label>
                <Input
                  id="email"
                  className="bg-white"
                  placeholder="1234567890"
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  className="bg-white"
                  placeholder="jane@gmail.com"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Password">Set Password</Label>
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
        <CardFooter className="flex justify-center">
          <Button
            variant="outline"
            className="w-full bg-[#0061ff] text-white rounded-lg"
          >
            Create Account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpForm;
