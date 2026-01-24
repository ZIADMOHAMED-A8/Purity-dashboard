import { useEffect, useState } from "react";

export function useIsTablet(breakpoint = 1120) {
  const [isTablet, setisTablet] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < breakpoint;
  });

  useEffect(() => {
    function handleResize() {
        setisTablet(window.innerWidth < breakpoint);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isTablet;
}