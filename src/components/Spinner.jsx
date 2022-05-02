import logger from "../utils/logger";
import "./Spinner.css";

function Spinner() {
  logger.debug("Spinner -> render");

  return (
    <div className="container-spinner">
      <i className=" spinner fa-solid fa-spinner fa-spin fa-3x" />
    </div>
  );
}

export default Spinner;
