"use cilent";

import { useCurrentPath } from "./useCurrentPath";

export function useReadCurrentPath() {
  const currentPath = useCurrentPath();
  const path = currentPath
    ?.split("/")
    ?.slice(1)
    ?.join(" / ")
    ?.split("%20")
    ?.join(" ")
    ?.split("-")
    ?.join(" ");

  return path;
}
