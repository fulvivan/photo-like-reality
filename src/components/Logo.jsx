import logger from "../utils/logger";
import Photos from "../Images/Photos.svg";
import "./Logo.css";

function Logo() {
  logger.debug("Logo -> render");

  return <img className="logo" alt="logo" src={Photos} />;
}

export default Logo;
