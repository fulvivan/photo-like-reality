import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "./AppContext";
import { retrieveFavItems, toggleFavItem } from "../logic";
import "./Favs.css";
import logger from "../utils/logger.js";

function Favs() {
  logger.debug("Favs -> render");

  const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext);

  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  const goToItem = (id) => navigate(`/search/items/item?id=${id}`);

  const { token } = sessionStorage;

  useEffect(() => {
    (async () => {
      logger.debug("Favs -> useEffect");

      try {
        onFlowStart();

        if (!token) {
          onFlowEnd();
          onModal("Login to see your favorite photos", "warn");

          navigate("/");
        } else {
          const favs = await retrieveFavItems(token);

          console.log(favs);
          setItems(favs);
        }

        onFlowEnd();
      } catch ({ message }) {
        onFlowEnd();

        onModal(message, "warn");
      }
    })();
  }, [token]);

  const toggleFav = async (item_id) => {
    try {
      onFlowStart();

      if (!token) {
        onFlowEnd();
        onModal("Login to add favorites to your profile", "warn");
      } else {
        await toggleFavItem(token, item_id);

        setItems(
          items.map((item) => {
            if (item.id === item_id) {
              return { ...item, isFav: !item.isFav };
            }

            return item;
          })
        );
        onFlowEnd();
      }
    } catch ({ message }) {
      onFlowEnd();

      onModal(message, "warn");
    }
  };

  return (
    <div className="gradient">
      {items && items.length ? (
        <ul className="box-photos-favs">
          {items.map(({ id, urls, isFav }) => (
            <li key={id} className="list-photos-favs">
              <img
                className="photo-favs "
                title="detail"
                src={urls.small}
                alt=""
                // onClick={() => goToItem(id)}
              />

              <div className="over-favs" onClick={() => goToItem(id)}>
                <div className="more-favs" onClick={() => goToItem(id)}>
                  More
                </div>
              </div>

              <button
                className="button-favs "
                onClick={(event) => {
                  event.stopPropagation();
                  //Siccome dentro della lista 'li' ci sono due onClick, quando si arriva al secondo, c'è la cosa che spara anche il primo.In questo modo si blocca al solo bottone del cuore. Non anche alla foto.
                  toggleFav(id);
                }}
              >
                {isFav ? "🧡" : "🤍"}
              </button>
            </li>
          ))}
          <li className="photo-last-favs"></li>
        </ul>
      ) : null}
    </div>
  );
}

export default Favs;
