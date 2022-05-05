import logger from "../utils/logger";
import "./Modal.css";

function Modal({ level, message, onAccept, onReset }) {
  logger.debug("Modal -> render");

  if (level === "success") logger.info(message);
  else if (level === "warn") logger.warn(message);
  else if (level === "error") logger.error(message);

  const className = `modal__message ${level ? `modal__message--${level}` : ""}`;

  return (
    <>
      <div className="modal">
        <div className="modal-panel">
          {/* <h1 className='modal__title'>Error</h1> */}
          <p className={className}>
            {message === "jwt expired" ? "session expired" : message}
          </p>
          <button
            className=" modal-button clickable"
            type="button"
            onClick=
            {() => {
              if (message === "jwt expired") {
                onReset();
                onAccept();
              } else {
                onAccept();
              }
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
