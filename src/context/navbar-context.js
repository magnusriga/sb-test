"use client";

import React, { createContext } from "react";

import useClientRect from "../hooks/useClientRect";

export const NavbarContext = createContext(null);

const NavbarProvider = ({ children }) => {
  const [navRect, setNavRect] = useClientRect(null);

  return (
    <NavbarContext.Provider value={{ navRect, setNavRect }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
