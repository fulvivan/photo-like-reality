import logger from "../utils/logger";
import { useContext } from "react";
import AppContext from "./AppContext";
import { registerUser } from "../logic";
import { useNavigate } from "react-router-dom"
import "./Register.css";

function Register() {
  logger.debug("Register -> render");

  const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext);

  const navigate = useNavigate();

  const register = async (name, username, email, password)=>
    {try {
      onFlowStart();

       await registerUser(name, username, email, password);

      onFlowEnd();

      onModal("Benvenut@! Adesso puoi fare il login.", "success");

      navigate('/login');
    } catch ({ message }) {
      onFlowEnd();

      onModal(message, "warn");
    }}
  

  return <div className="background-register">
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
      <input
        className="field-register"
        type="text"
        name="name"
        id="register-name"
        placeholder="Name"
        required
      />
      <input
        className="field-register"
        type="text"
        name="username"
        id="register-username"
        placeholder="Username"
        required
      />
      <input
        className="field-register"
        type="email"
        name="email"
        id="register-email"
        placeholder="Email"
        required
      />
      <input
        className="field-register"
        type="password"
        name="password"
        id="register-password"
        placeholder="Password"
        required
      />

      <div className="container-register">
        {/* <button
          type="button"
          className="button-register"
          onClick={(event) => {
            event.preventDefault();

            onSignIn();
          }}
        >
          Sign in
        </button> */}
        <button type="submit" className="button-register clickable">
          Register
        </button>
        {/* <button
          type="button"
          className="button button--medium"
          onClick={(event) => {
            event.preventDefault();

            onBack();
          }}
        >
          Go Back
        </button> */}
      </div>

      
    </form>
  </div>
  
  
}

export default Register;
