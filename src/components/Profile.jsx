import logger from "../utils/logger";
import { useNavigate } from "react-router-dom";
import ImgProfile from "../Images/ImgProfile.jpg";
import "./Profile.css";

function Profile({ onReset }) {
  logger.debug("Profile -> render");

  const navigate = useNavigate();

  const goToUnregister = () => navigate("/profile/unregister");

  const goToUpdate = () => navigate("/profile/update");

  return (
    <>
      <section className="background-profile gradient">
        <div className="container-profile" id="profile">
          <div className="box-profile">
            <button
              type="button"
              className="button-profile"
              onClick={goToUpdate}
            >
              Update
            </button>

            <button
              type="button"
              className="button-profile"
              onClick={goToUnregister}
            >
              Unregister
            </button>

            <button type="button" className="button-profile" onClick={onReset}>
              Sign out
            </button>

            <img className="img-profile" src={ImgProfile} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
