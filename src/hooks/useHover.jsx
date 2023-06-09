import { useState, useEffect, useRef } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseenter", enter);
      node.addEventListener("mouseleave", leave);

      return () => {
        node.removeEventListener("mouseenter", enter);
        node.removeEventListener("mouseleave", leave);
      };
    }
  }, []);

  return [hovered, ref];
}

export default useHover;
