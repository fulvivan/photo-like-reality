import logger from "../utils/logger";
import { useContext } from "react";
import AppContext from "./AppContext";
import { registerUser } from "../logic";
import { useNavigate } from "react-router-dom";
import ImgRegister from "../Images/ImgRegister.jpg";
import "./Register.css";

function Register() {
  logger.debug("Register -> render");

  const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext);

  const navigate = useNavigate();

  const register = async (name, username, email, password) => {
    try {
      onFlowStart();

      await registerUser(name, username, email, password);

      onFlowEnd();

      onModal("Welcome! Now you can log in", "success");

      navigate("/login");
    } catch ({ message }) {
      onFlowEnd();

      onModal(message, "warn");
    }
  };

  return (
    <div className="background-register">
      <form
        className="container-register"
        onSubmit={(event) => {
          event.preventDefault();

          const {
            target: {
              name: { value: name },
              username: { value: username },
              email: { value: email },
              password: { value: password },
            },
          } = event;

          register(name, username, email, password);
        }}
      >
        <div className="box-register">
          <label htmlFor="register-name">Name</label>
          <input
            className="field-register"
            type="text"
            name="name"
            id="register-name"
            placeholder=""
            required
          />

          <label htmlFor="register-username">Username</label>
          <input
            className="field-register"
            type="text"
            name="username"
            id="register-username"
            placeholder=""
            required
          />

          <label htmlFor="register-email">Email</label>
          <input
            className="field-register"
            type="email"
            name="email"
            id="register-email"
            placeholder=""
            required
          />

          <label htmlFor="register-password">Password</label>
          <input
            className="field-register"
            type="password"
            name="password"
            id="register-password"
            placeholder=""
            required
          />

          <button type="submit" className="button-register">
            Register
          </button>

          <img className="img-register" src={ImgRegister} alt="login" />
        </div>
      </form>
    </div>
  );
}

export default Register;
