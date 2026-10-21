import { useEffect, useState } from "react";

const KEY = "nexa-dark-mode";

function useDarkMode() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved !== null) return saved === "true";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch (err) {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(KEY, String(dark));
    } catch (err) {
      // ignore
    }
  }, [dark]);

  function toggleDark() {
    setDark((current) => !current);
  }

  return { dark, toggleDark };
}

export default useDarkMode;
