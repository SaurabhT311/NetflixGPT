import { useEffect } from "react";

/**
 * Custom hook that detects clicks outside of a specified element and updates visibility state.
 *
 * @param {Object} ref - The ref object pointing to the element to detect outside clicks.
 * @param {boolean} isVisible - The current visibility state of the element.
 * @param {Function} setIsVisible - The function to update the visibility state.
 */
const useOutsideClick = (ref, isVisible, setIsVisible) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
};

export default useOutsideClick;
