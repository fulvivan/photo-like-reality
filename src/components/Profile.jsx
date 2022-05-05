import { useState } from "react";
import logger from "../utils/logger";
import { useNavigate } from "react-router-dom";
import Unregister from "./Unregister";
import Update from "./Update";
import "./Profile.css";

function Profile({onReset}) {
  logger.debug("Profile -> render");

  const navigate = useNavigate()

  const [view, setView] = useState(null);

  const goToUnregister = () => navigate("/profile/unregister");

  const goToUpdate = () => navigate("/profile/update");


  return (
    <>
      <section className="background-profile">
        
        <div className="container-profile" id="profile">

          <button
            type="button"
            className="button-profile clickable"
            onClick={goToUpdate}
          >
            Update
          </button>

          <button
            type="button"
            className="button-profile button-warning clickable"
            onClick={goToUnregister}
          >
            Unregister
          </button>

          <button type="button" className="button-profile clickable" onClick={onReset}>
            Sign out
          </button>
        </div>
      )

      {/* {view === "update" && <Update />}

      {view === "unregister" && (
        <Unregister />
      )} */}
      </section>
     
    </>
  );
}

export default Profile;
