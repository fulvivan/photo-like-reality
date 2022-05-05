import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "./AppContext";
import { retrieveFavItems, toggleFavItem } from "../logic";
import "./Favs.css";
import logger from "../utils/logger.js";
// import './Favs.css'

function Favs() {
  logger.debug("Favs -> render");

  const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext);

  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  const goToItem = (id) => navigate(`/search/items/item?id=${id}`);

  const { token } = sessionStorage;

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

  useEffect(() => {
    (async () => {
      logger.debug("Favs -> useEffect");
      try {
        onFlowStart();
        if (!token) {
          onFlowEnd();
          onModal("Login to see your favorite photos", "warn");

          navigate('/')
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
  console.log(items);
  //   const [fav, setFav] = useState();
  //   try {
  //     onFlowStart();

  //     const fav = await toggleFavItem(sessionStorage.token);

  //     setFav(fav);

  //     onFlowEnd();
  //   }catch ({ message }) {
  //     onFlowEnd();

  //     onModal(message, "warn");
  //   }
  // }
  // favsUseEffect();
  //   }, [onFlowEnd, onFlowStart, onModal]);

  return (
    <>
      {/* <button
        type="button"
        className="button-back"
        onClick={(event) => {
          event.preventDefault();

          navigate("/");
        }}
      >
        Go back to home
      </button> */}

      {items && items.length ? (
        <ul className="box-photos-favs">
          {items.map(({ id, urls, isFav }) => (
            <li
              key={id}
              className="list-photos-favs"
             
            >
              {/* <h2>
                {user.first_name} {user.last_name}
              </h2> */}

              <img
                className="photo-favs clickable"
                title="detail"
                src={urls.thumb}
                alt=""
                 onClick={() => goToItem(id)}
              />
              <button
                className="button-favs clickable"
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
    </>
  );
}

export default Favs;
