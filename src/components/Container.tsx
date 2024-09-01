"use client";
import React, { ReactNode, memo } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = memo(function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`max-w-screen-xl mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
});

export default Container;
