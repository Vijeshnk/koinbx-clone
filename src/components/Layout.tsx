"use client";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-[#17213B] text-white">
    {children}
  </div>
);

export default Layout;
