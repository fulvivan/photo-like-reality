import logger from "../utils/logger";
import "./Logo.css";

function Logo() {
  logger.debug("Logo -> render");

  return <img className="logo" alt="logo" src={'../../Photos/Photos.svg'} />;
}

export default Logo;
