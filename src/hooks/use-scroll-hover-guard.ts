import { useEffect } from "react";

// Blocks hover effects while the page is scrolling, so cards sliding under a resting
// cursor do not start hover animations mid-scroll. Uses a transparent fixed overlay
// rather than pointer-events on <body>, which would restyle the whole page.
export function useScrollHoverGuard() {
  useEffect(() => {
    const shield = document.createElement("div");
    shield.setAttribute("aria-hidden", "true");
    shield.style.cssText = "position:fixed;inset:0;z-index:2147483647;display:none;";
    document.body.appendChild(shield);
    let timer = 0;
    const onScroll = () => {
      if (!timer) shield.style.display = "block";
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        shield.style.display = "none";
        timer = 0;
      }, 150);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
      shield.remove();
    };
  }, []);
}
