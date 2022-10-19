import React from "react";
import Navbar from "./Navbar";
import SocialLinks from "../components/SocialLinks";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="mt-10">{children}</main>
      <SocialLinks />
    </div>
  );
};

export default AppLayout;
