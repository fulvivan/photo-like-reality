import logger from "../utils/logger";
import { useContext } from "react";
import AppContext from "./AppContext";
import { loginUser } from "../logic";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  logger.debug("Login -> render");

  const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext);

  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      onFlowStart();

      const token = await loginUser(username, password);

      sessionStorage.token = token;

      onFlowEnd();

      onModal("Login ok", "success");

      navigate("/");
    } catch ({ message }) {
      onFlowEnd();

      onModal(message, "warn");
    }
  };

  return (
    <div className="background-login">
      <form
        className="container-login"
        onSubmit={(event) => {
          event.preventDefault();

          const {
            target: {
              username: { value: username },
              password: { value: password },
            },
          } = event;

          login(username, password);
        }}
      >
        <input
          className="field-login "
          type="text"
          name="username"
          id="login-username"
          placeholder="Username"
          required
        />
        <input
          className="field-login"
          type="password"
          name="password"
          id="login-password"
          placeholder="Password"
          required
        />

        <div className="container-login">
          <button type="submit" className="button-login">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
