import logger from "../utils/logger";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile({ onReset }) {
  logger.debug("Profile -> render");

  const navigate = useNavigate();

  const goToUnregister = () => navigate("/profile/unregister");

  const goToUpdate = () => navigate("/profile/update");

  return (
    <>
      <section className="background-profile">
        <div className="container-profile" id="profile">
          <button type="button" className="button-profile" onClick={goToUpdate}>
            Update
          </button>

          <button
            type="button"
            className="button-profile button-warning"
            onClick={goToUnregister}
          >
            Unregister
          </button>

          <button type="button" className="button-profile" onClick={onReset}>
            Sign out
          </button>
        </div>
        )
      </section>
    </>
  );
}

export default Profile;
