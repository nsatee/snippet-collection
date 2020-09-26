import { RefObject, useEffect, useState } from "react";

export const useResizeRect = <T extends HTMLElement>(ref: RefObject<T>) => {
  const [rect, setRect] = useState<DOMRect | null>(null);
  useEffect(() => {
    const cb = (event: UIEvent) => {
      if (ref.current) {
        setRect(ref.current.getBoundingClientRect());
      }
    };

    window.addEventListener("resize", cb);
    return () => {
      window.removeEventListener("resize", cb);
    };
  }, [ref]);

  return {
    element: ref.current,
    rect,
  };
};
