import { useEffect, useState } from "react";

export default function useBreakpoints() {
  const [device, setDevice] = useState(getDevice());

  function getDevice() {
    if (window.innerWidth < 768) return "mobile";
    if (window.innerWidth < 1024) return "tablet";
    return "desktop";
  }

  useEffect(() => {
    function handleResize() {
        const newDevice = getDevice();
        setDevice(prev => (prev !== newDevice ? newDevice : prev));
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile:device==='mobile',
    isTablet:device==='tablet',
    isDesktop:device==='desktop',

  };
}
