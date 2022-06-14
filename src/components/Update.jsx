import logger from "../utils/logger";
import { modifyUser } from "../logic";
import AppContext from "./AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ImgUpdate from "../Images/ImgUpdate.jpg"
import "./Update.css";

function Update() {
  logger.debug("SignIn -> render");

  const navigate = useNavigate();

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
    <section className="background-update gradient">
      <form
        className="container-update"
        onSubmit={(event) => {
          event.preventDefault();

          const {
            target: {
              password: { value: password },
              newName: { value: newName },
              newUsername: { value: newUsername },
              newEmail: { value: newEmail },
              newPassword: { value: newPassword },
            },
          } = event;

          const data = {
            password,
            newName,
            newUsername,
            newEmail,
            newPassword,
          };

          for (const key in data) {
            if (data[key] === "") {
              delete data[key];
            }
          }

          update(data);
        }}
      >
        <div className="box-update">

        <label htmlFor="update-password">Enter Old Password</label>
          <input
            className="field-update"
            type="password"
            name="password"
            id="update-password"
            placeholder=""
            required
          />

          <label htmlFor="update-newName">New Name</label>
          <input
            className="field-update"
            type="text"
            name="newName"
            id="update-newName"
            placeholder=""
          />

          <label htmlFor="update-newUsername">New Username</label>
          <input
            className="field-update"
            type="text"
            name="newUsername"
            id="update-newUsername"
            placeholder=""
          />

          <label htmlFor="update-newEmail">Enter New Email</label>
          <input
            className="field-update"
            type="email"
            name="newEmail"
            id="update-newEmail"
            placeholder=""
          />

          <label htmlFor="update-newPassword">Enter New Password</label>
          <input
            className="field-update"
            type="password"
            name="newPassword"
            id="update-newPassword"
            placeholder=""
          />

        

           <button type="submit" className="button-update button--dark">
              Update
          </button>
          
           <button
              type="button"
              className="button-update"
              onClick={(event) => {
                event.preventDefault();

                navigate("/profile");
              }}
            >
              Go Back To Profile
          </button>
          
 <img className="img-update" src={ImgUpdate} alt="" />

          {/* <div>
         
</div>

          <div className="container-update">
           
           
          </div> */}
        </div>
      </form>
    </section>
  );
}

export default Update;
