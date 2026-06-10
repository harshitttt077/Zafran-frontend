
import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.remove(
      "lenis",
      "lenis-smooth",
      "lenis-scrolling",
      "lenis-stopped",
    );
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }, []);

  return <>{children}</>;
}
