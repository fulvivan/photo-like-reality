import logger from "../utils/logger";
import { useContext } from "react";
import AppContext from "./AppContext";
import { loginUser } from "../logic";
import { useNavigate } from "react-router-dom";
import ImgLogin from "../Images/ImgLogin.jpg";
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
    <div className="background-login gradient">
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
        <h1 className="h1-login">Login</h1>

        <div className="box-login">
          <label htmlFor="login-username">Username</label>
          <input
            className="field-login "
            type="text"
            name="username"
            id="login-username"
            placeholder=""
            required
          />
          <label htmlFor="login-password">Password</label>
          <input
            className="field-login"
            type="password"
            name="password"
            id="login-password"
            placeholder=""
            required
          />

          <button type="submit" className="button-login">
            Login
          </button>

          <span className="p-login">
            New to Photos?
            <button
              className="join"
              type="button"
              onClick={() => navigate("/register")}
            >
              Join
            </button>
          </span>

          <img className="img-login" src={ImgLogin} alt="" />
        </div>
      </form>
    </div>
  );
}

export default Login;
