import { RefObject, useEffect } from "react";

export const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  options: {
    onClickOutside?: (args: { target: HTMLDivElement }) => void;
    onClickInside?: (args: { target: HTMLDivElement }) => void;
  }
) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current) {
        if (!ref.current.contains(event.target)) {
          options.onClickOutside &&
            options.onClickOutside({
              target: ref.current,
            });
        } else {
          options.onClickInside &&
            options.onClickInside({
              target: ref.current,
            });
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [options, ref]);
};
