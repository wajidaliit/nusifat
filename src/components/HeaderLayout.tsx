"use client";

import { useCurrentPath } from "@/hooks/useCurrentPath";
import HeaderThirdHome from "./header/home-3";
import HeaderSecondHome from "./header/home-2";
import HeaderFirstHome from "./header/home-1/navbar-top";
import { memo } from "react";

const HeaderLayout = memo(function HeaderLayout() {
  const currentPath = useCurrentPath();

  if (currentPath.startsWith("/home-3")) {
    return <HeaderThirdHome />;
  } else if (currentPath.startsWith("/home-2")) {
    return <HeaderSecondHome />;
  } else {
    return <HeaderFirstHome />;
  }
  return <>Header Error</>;
});

export default HeaderLayout;
