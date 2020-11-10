import React, { useEffect, useState, useRef } from "react";
import sun from "../assets/desktop/icon-sun.svg";
import moon from "../assets/desktop/icon-moon.svg";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light";

    if (currentTheme === "dark") {
      checkbox.current.checked = true;
    }

    setTheme(currentTheme);
  }, []);

  const checkbox = useRef();

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
    console.log("Change theme?");
  };

  return (
    <div className="theme-switch-wrapper">
      <img src={sun} alt="Light" id="sun" />
      <label className="theme-switch" htmlFor="checkbox">
        <input ref={checkbox} type="checkbox" id="checkbox" onClick={changeTheme} />
        <div className="slider round" />
      </label>
      <img src={moon} alt="Dark" id="moon" />
    </div>
  );
}

export default ThemeSwitcher;
