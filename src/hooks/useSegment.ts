"use cilent";

import { useCurrentPath } from "./useCurrentPath";

export function useSegment() {
  const currentPath = useCurrentPath();
  const segment = currentPath
    ?.split("/")
    ?.[currentPath?.split("/")?.length - 1]?.split("%20")
    ?.join(" ")
    ?.split("-")
    ?.join(" ");

  return segment;
}
