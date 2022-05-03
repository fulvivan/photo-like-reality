import { useState, useEffect, useContext } from "react";
// import { useParams } from 'react-router-dom'
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
  // const { id } = useParams()
  const [item, setItem] = useState();

  const queryParams = useQueryParams();

  const item_id = queryParams.get("id");

  const toggleFav = async (item_id) => {
    try {
      onFlowStart();
      const token = sessionStorage.token;
      console.log(token);

      if (!token) {
        onModal("Login to add favorites to your profile", "warn");
      } else {
        await toggleFavItem(token, item_id);

        setItem({ ...item, isFav: !item.isFav })
          
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
          <div className="card">
            <img className="detail-image" src={item.urls.thumb} alt="" />
            {/* <h3 className="card__header">{item.name}</h3> */}

            <br />
            {/* <div className="card__body">
              <p className="card__body-description">
                Description: "{item.alt_description}"
              </p>
            </div> */}
            <br />
            <ul className="card__list">
              <li className="info-detail">
                <span>
                  {item.user.first_name} {item.user.last_name}
                </span>
              </li>
              <li className="info-detail">
                <span>{item.user.location}</span>
              </li>
              <br />
              <li className="info-detail">
                <span>
                  📷: {item.exif.make} - {item.exif.model}
                </span>
              </li>
            </ul>
            <br />
            <div className="card-body">
              <a href={item.urls.full} className="card-body">
                See photo
              </a>
            </div>
            <br/>
            <div className="info-detail">
              Save in Favs
              <button
                // type="button"
                className=" fav-button"
                onClick={() => 
                
                  toggleFav(item.id)
                }
              >
                {item.isFav ? "🧡" : "🤍"}
              </button>
            </div>
            <button
              type="button"
              className="button-detail"
              onClick={() => navigate(-1)}
            >
              Go back to results
            </button>
          </div>
          {/* <button type="button" className="button button--medium" onClick={onBack}>Back to Results</button>
            <h2>{item.name}</h2>
            <img className="home__detail-image" src={item.images[0]} alt="" />
            <p>{item.description}</p>
            <span>{item.price}</span>
            <button type='button' className='button' onClick={() => onToggle(item_id)}>{item.isFav ? '🧡' : '🤍'}</button>
            <span>Colors: {item.colors}</span>
            <a href={item.url}>Visit the store</a> */}
        </>
      )}
    </div>
  );
}

export default Detail;
