import { useState } from "react";
import { Header, SignUpForm, SignInForm } from "./components/index";

export default function App() {
  return (
    <div className="p-3 bg-[#f9fbff]">
      <Header />
      <div className="bg-primary flex items-center justify-center min-h-screen">
        <SignInForm className="text-5xl" />
      </div>
    </div>
  );
}
