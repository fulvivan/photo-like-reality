import logger from "../utils/logger";
import { useContext } from "react";
import { unregisterUser } from "../logic";
import AppContext from "./AppContext";
import { useNavigate } from "react-router-dom";
import ImgUnregister from "../Images/ImgUnregister.jpg"
import "./Unregister.css";

function Unregister() {
  logger.debug("Unregister -> render");

  const navigate = useNavigate();

  const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext);

  const unregister = async (password) => {
    try {
      onFlowStart();

      const { token } = sessionStorage;

      await unregisterUser(token, password);

      logger.info("User unregistered");

      onFlowEnd();

      onModal("User unregistered", "success");

      navigate("/");
    } catch ({ message }) {
      onFlowEnd();

      onModal(message, "warn");
    }
  };

  return (
    <section className="background-unregister gradient">
      <div className="container-unregister">
        <form
          className="container-unregister"
          onSubmit={(event) => {
            event.preventDefault();

            const password = event.target.password.value;

            unregister(password);
          }}
        >

          <div className="box-unregister">

            <label htmlFor="unregister-password">Password</label>
              <input
            className="field-unregister"
            type="password"
            name="password"
            id="unregister-password"
              placeholder=""
              required
          />

             <button type="submit" className="button-unregister button--dark">
              Unregister
            </button>

            <button
              type="button"
              className="button-unregister"
              onClick={(event) => {
                event.preventDefault();

                navigate("/profile");
              }}
            >
              Go Back To Profile
            </button>

          {/* <div className="container-unregister">
           
            
</div> */}
 <img className="img-unregister" src={ImgUnregister} alt="" />
        
          </div>
        </form>
      </div>
    </section>
  );
}

export default Unregister;
