import { useEffect, useRef } from "react";

function useOutsideClick(callback: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener(
      "touchstart",
      handleClickOutside as EventListenerOrEventListenerObject,
    );

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener(
        "touchstart",
        handleClickOutside as EventListenerOrEventListenerObject,
      );
    };
  }, [callback]);

  return ref;
}
export default useOutsideClick;
