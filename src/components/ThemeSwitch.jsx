import { useState, useEffect } from "react";
import logger from "../utils/logger";
import "./ThemeSwitch.css";

function ThemeSwitch() {
  logger.debug("ToggleSwitch -> render");

  const [switched, setSwitched] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : null;

    if (currentTheme) {
      if (currentTheme === "dark") setSwitched(true);
    }
  }, [switched]);

  const switchTheme = (event) => {
    if (event.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");

      localStorage.setItem("theme", "dark");

      setSwitched(true);
    } else {
      document.documentElement.setAttribute("data-theme", "light");

      localStorage.setItem("theme", "light");

      setSwitched(false);
    }
  };

  return (
    <>
      <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            checked={switched ? true : false}
            onChange={switchTheme}
          />
          <div className="slider round"></div>
        </label>
        <p>Theme</p>
      </div>
    </>
  );
}

export default ThemeSwitch;
