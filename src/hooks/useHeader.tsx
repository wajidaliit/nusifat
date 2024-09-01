"use client";

import { useCurrentPath } from "./useCurrentPath"; 
import HeaderFirstHome from "@/components/header/home-1/navbar-top";
import HeaderSecondHome from "@/components/header/home-2";
import HeaderThirdHome from "@/components/header/home-3";

export function useHeader() {
  const currentPath = useCurrentPath();
  
  // Determine which header component to return based on the current path
  if (currentPath.startsWith("/home-3")) {
    return HeaderThirdHome;
  } else if (currentPath.startsWith("/home-2")) {
    return HeaderSecondHome;
  } else {
    return HeaderFirstHome;
  }
}
