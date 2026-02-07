

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    const outer = outerRef.current;

    if (!inner || !outer) return;

    const moveCursor = (e: MouseEvent) => {
      outer.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      inner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };


    

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.matches("a, button, .cursor-pointer")) {
        inner.classList.add("cursor-hover");
        outer.classList.add("cursor-hover");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.matches("a, button, .cursor-pointer")) {
        inner.classList.remove("cursor-hover");
        outer.classList.remove("cursor-hover");
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    inner.style.visibility = "visible";
    outer.style.visibility = "visible";

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={outerRef} className="mouseCursor cursor-outer" />
      <div ref={innerRef} className="mouseCursor cursor-inner" />
    </>
  );
}
