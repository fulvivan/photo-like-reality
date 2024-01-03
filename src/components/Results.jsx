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
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState();

  const queryParams = useQueryParams();

  const query = queryParams.get("query");

  const { token } = sessionStorage;

  const loadMoreItems = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    (async () => {
      logger.debug("Results -> useEffect");

      try {
        onFlowStart();

        const resultsContainer = await searchItems(token, query, page);

        console.log(resultsContainer);

        onFlowEnd();

        const photos = resultsContainer.results;
        console.log(photos);

        const totalPages = resultsContainer.total_pages;

        setPages(totalPages);
        setItems([...items, ...photos]);
      } catch ({ message }) {
        onFlowEnd();

        onModal(message, "warn");
      }
    })();
    //eslint-disable-next-line
  }, [query, page]);

  const toggleFav = async (item_id) => {
    try {
      onFlowStart();

      if (!token) {
        onFlowEnd();
        onModal("Log in to add favorites to your profile", "warn");
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
    <div className="">
      <p className="p-results">Results for : {query} </p>

      {items && items.length ? (
        <ul className="box-photos-results">
          {items.map(({ id, isFav, urls }) => (
            <li key={id} className="list-photos-results">
              <img
                className="photo-results"
                title="detail"
                src={urls.small}
                alt=""
              />

              <div className="over-results" onClick={() => goToItem(id)}>
                <div className="more-results" onClick={() => goToItem(id)}>
                  More
                </div>
              </div>

              <button
                className="fav-button-results"
                onClick={(event) => {
                  event.stopPropagation();

                  toggleFav(id);
                }}
              >
                {isFav ? "🧡" : "🤍"}
              </button>
            </li>
          ))}
          <li className="photo-last-results"></li>
        </ul>
      ) : null}

      <div className="box-load">
        {page < pages ? (
          <button className="load-more-button" onClick={loadMoreItems}>
            Load more
          </button>
        ) : (
          <p className="p-load">No more pictures for: {query}</p>
        )}
      </div>
    </div>
  );
}

export default Results;
