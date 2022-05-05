import logger from "../utils/logger";
import { modifyUser } from "../logic";
import AppContext from "./AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Update.css";

function Update() {
  logger.debug("SignIn -> render");

  const navigate = useNavigate()

  const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext);

  const update = async (data) => {
    try {
      onFlowStart();

      const { token } = sessionStorage;

      await modifyUser(token, data);

      onFlowEnd();

      onModal("Profile updated", "success");

      navigate("/");
    } catch ({ message }) {
      onFlowEnd();

      onModal(message, "warn");
    }
  };
  
  return (
    <section className="background-update">
       <form
      className="container-update"
      onSubmit={(event) => {
        event.preventDefault();

        const {
          target: {
            newName: { value: newName },
            newUserName: { value: newUserName },
            newEmail: { value: newEmail },
            password: { value: password },
            newPassword: { value: newPassword },
          },
        } = event;

        const data = { password, newName, newUserName, newEmail, newPassword };

        for (const key in data) {
          if (data[key] === "") {
            delete data[key];
          }
        }

        update(data);
      }}
    >
      <input
        className="field-update"
        type="text"
        name="newName"
        id="update-newName"
        placeholder="New Name"
      />
      <input
        className="field-update"
        type="text"
        name="newUsername"
        id="update-newUsername"
        placeholder="New Username"
      />
      <input
        className="field-update"
        type="email"
        name="newEmail"
        id="register-email"
        placeholder="New Email"
      />
      <input
        className="field-update"
        type="password"
        name="newPassword"
        id="register-newPassword"
        placeholder="New Password"
      />
      <input
        className="field-update"
        type="password"
        name="password"
        id="register-password"
        placeholder="Password"
        required
      />

      <div className="container-update">
        <button type="submit" className="button-update button--dark clickable">
          Update
        </button>
        <button
          type="button"
          className="button-update clickable"
          onClick={(event) => {
            event.preventDefault();

            navigate('/profile');
          }}
        >
          Go Back To Profile
        </button>
      </div>
    </form>
    </section>
   
  );
}

export default Update;
