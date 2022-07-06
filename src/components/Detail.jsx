import { useState, useEffect, useContext } from "react";
import { useQueryParams } from "../hooks";
import { retrieveItem } from "../logic";
import AppContext from "./AppContext";
import logger from "../utils/logger";
import { toggleFavItem } from "../logic";
import "./Detail.css";
import { useNavigate } from "react-router-dom";

function Detail() {
  logger.debug("Detail -> render");

  const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext);

  const navigate = useNavigate();

  const [item, setItem] = useState();

  const queryParams = useQueryParams();

  const item_id = queryParams.get("id");

  const toggleFav = async (item_id) => {
    try {
      onFlowStart();
      const token = sessionStorage.token;
      console.log(token);

      if (!token) {
        onModal("Log in to add favorites to your profile", "warn");
      } else {
        await toggleFavItem(token, item_id);

        setItem({ ...item, isFav: !item.isFav });
      }

      onFlowEnd();
    } catch ({ message }) {
      onFlowEnd();

      onModal(message, "warn");
    }
  };

  useEffect(() => {
    (async () => {
      logger.debug("Detail -> useEffect");

      const { token } = sessionStorage;

      try {
        onFlowStart();

        const item = await retrieveItem(token, item_id);

        onFlowEnd();

        setItem(item);
      } catch ({ message }) {
        onFlowEnd();

        onModal(message, "warn");
      }
    })();
  }, [item_id]);

  return (
    <div className="container-detail">
      {item && (
        <>
          <ul className="">
            <li className="li-detail">
              <img className="detail-image" src={item.urls.small} alt="" />
            </li>

            <li className="li-detail">
              <span className="info-detail">
                {item.user.first_name} {item.user.last_name}
              </span>
            </li>

            <li className="li-detail">
              <span className="info-detail">🗺️: {item.location.city}</span>
            </li>

            <li className="li-detail">
              <span className="info-detail">
                📷: {item.exif.make} - {item.exif.model}
              </span>
            </li>

            <li className="info-detail">
              Save in Favs
              <button className="fav-detail" onClick={() => toggleFav(item.id)}>
                {item.isFav ? "🧡" : "🤍"}
              </button>
            </li>

            <li className="info-detail">
              <span className="li-detail ">
                Click
                <a href={item.urls.full} className="card">
                  here
                </a>
                to see the picture bigger
              </span>
            </li>

            <li className="info-detail">
              <span
                href={item.links.html}
                className=" card1 fa-regular fa-user"
              ></span>
              <a href={item.links.html} className="card">
                Profile
              </a>
            </li>

            <button
              type="button"
              className="button-detail "
              onClick={() => navigate(-1)}
            >
              Go back
            </button>
          </ul>
        </>
      )}
    </div>
  );
}

export default Detail;
