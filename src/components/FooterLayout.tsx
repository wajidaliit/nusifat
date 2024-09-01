"use client";

import React, { memo } from "react";
import { useCurrentPath } from "@/hooks/useCurrentPath"; 
import FooterThirdHome from "./footer/home-3";
import FooterSecondHome from "./footer/home-2";
import FooterFirstHome from "./footer/hoome-1";

const FooterLayout = memo(function FooterLayout() {
  const currentPath = useCurrentPath();

  if (currentPath.startsWith("/home-3")) {
    return <FooterThirdHome />;
  } else if (currentPath.startsWith("/home-2")) {
    return <FooterSecondHome />;
  } else {
    return <FooterFirstHome />;
  }
});

export default FooterLayout;
