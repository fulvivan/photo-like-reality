import logger from "../utils/logger";
import React, { useEffect } from "react";
import PhotosLight from "../Images/PhotosLight.png";
import PhotosDark from "../Images/PhotosDark.png";
import "./Logo.css";

function Logo() {
  logger.debug("Logo -> render");

  // const [switched, setSwitched] = useState(false)



  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme)
    }
})

  return <div className="logo">
   {document.documentElement.setAttribute('data-theme', 'dark') ? (
    <img src={PhotosLight} alt="logo" />
  ) : (
    <img src={PhotosDark} alt="logo" />
  )}
  </div>;
}

export default Logo;
