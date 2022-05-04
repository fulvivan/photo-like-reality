import useQueryParams from "../hooks/use-query-params";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { searchItems, toggleFavItem } from "../logic";
import AppContext from "./AppContext";
import logger from "../utils/logger";
import "./Results.css";

function Results() {
  logger.debug("Results -> render");

  const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext);

  const navigate = useNavigate();

  const goToItem = (id) => navigate(`/search/items/item?id=${id}`);

  const [items, setItems] = useState([]);

  const queryParams = useQueryParams();

  const query = queryParams.get("query");

  const { token } = sessionStorage;

  useEffect(() => {
    (async () => {
      logger.debug("Results -> useEffect");

      try {
        onFlowStart();

        const resultsContainer = await searchItems(token, query);
        console.log(resultsContainer);

        onFlowEnd();

        const photos = resultsContainer.results;
        console.log(photos);

        setItems(photos);
      } catch ({ message }) {
        onFlowEnd();

        onModal(message, "warn");
      }
    })();
  }, [query]);
  console.log(items);

  const toggleFav = async (item_id) => {
    try {
      onFlowStart();
      const token = sessionStorage.token;
      console.log(token);

      if (!token) {
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
      }

      onFlowEnd();
    } catch ({ message }) {
      onFlowEnd();

      onModal(message, "warn");
    }
  };

  return (
    <>
      <p className="p-results">Results: {query}</p>
      {items && items.length ? (
        <ul className="box-photos-results">
          {items.map(({ id, isFav, urls }) => (
            <li key={id} className="list-photos-results">
              <img
                className="photo-results"
                title="detail"
                src={urls.thumb}
                alt=""
                onClick={() => goToItem(id)}
              />
              <button
                className="fav-button"
                onClick={(event) => {
                  event.stopPropagation();

                  toggleFav(id);
                }}
              >
                {isFav ? "🧡" : "🤍"}
              </button>
              {/* <p>{user.location}</p>
          <p>{user.name}</p> */}
              
            </li>
           
          ))}
          <li className="photo-last-results"></li>
        </ul>
      ) : null}
    </>
  );
}

export default Results;
