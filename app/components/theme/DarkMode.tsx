"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="right-4 bottom-4 flex-row flex text-center"
      onClick={(e) => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "dark" ? (
        <>
          <FaMoon style={{ marginRight: "8px", alignSelf: "center" }} />
          <h1 className="font-semibold ">Light Mode</h1>
        </>
      ) : (
        <>
          <FaSun style={{ marginRight: "8px", alignSelf: "center" }} />
          <h1 className="font-semibold">Dark Mode</h1>
        </>
      )}
    </button>
  );
};

export default DarkModeButton;
