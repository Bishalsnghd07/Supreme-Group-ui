import { useEffect, useState } from "react";

// hooks/useScrollHide.ts
export function useScrollHide(threshold = 100) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll && current > threshold);
      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return hidden;
}
