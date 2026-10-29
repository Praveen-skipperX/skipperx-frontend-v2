import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/** Apply one scroll policy to every route, including repeated page links. */
export function RouteScroll() {
  const { key, pathname, search, hash } = useLocation();

  useLayoutEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useLayoutEffect(() => {
    let target: HTMLElement | null = null;
    if (hash) {
      try {
        target = document.getElementById(decodeURIComponent(hash.slice(1)));
      } catch {
        // A malformed fragment should still open the page at the top.
      }
    }
    if (target) {
      target.scrollIntoView({ behavior: "instant", block: "start" });
    } else {
      // Override the site's smooth scrolling so the new page starts at the top
      // before paint, rather than animating from the previous page's position.
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [key, pathname, search, hash]);

  return null;
}
