"use client";

import { useEffect, useRef } from "react";

export default function Waypoint() {
  const dotRef = useRef(null);

  useEffect(() => {
    function updateWaypoint() {
      const dot = dotRef.current;
      if (!dot) return;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? doc.scrollTop / scrollable : 0;
      const trackHeight = window.innerHeight;
      dot.style.top = `${progress * trackHeight}px`;
    }

    window.addEventListener("scroll", updateWaypoint, { passive: true });
    window.addEventListener("resize", updateWaypoint);
    updateWaypoint();

    return () => {
      window.removeEventListener("scroll", updateWaypoint);
      window.removeEventListener("resize", updateWaypoint);
    };
  }, []);

  return (
    <div className="waypoint" aria-hidden="true">
      <div className="waypoint__track"></div>
      <div className="waypoint__dot" ref={dotRef}></div>
    </div>
  );
}
