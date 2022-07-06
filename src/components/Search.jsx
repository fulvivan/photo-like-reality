import { useState } from "react";
import useQueryParams from "../hooks/use-query-params";
import { useNavigate } from "react-router-dom";
import logger from "../utils/logger";
import ImgSearch from "../Images/ImgSearch.jpg";
import "./Search.css";

function Search() {
  logger.debug("Search -> render");

  const navigate = useNavigate();
  const queryParams = useQueryParams();
  const [query, setQuery] = useState(queryParams.get("query"));

  const search = (query) => {
    setQuery(query);

    navigate(`/search/items?query=${query}`);
  };

  return (
    <section className="background-search">
      <form
        className="container-search"
        onSubmit={(event) => {
          event.preventDefault();

          const query = event.target.query.value; // DOM API

          search(query);
        }}
      >
        <div className="box-search">
          <input
            className="field-search"
            type="text"
            placeholder="Search photos"
            name="query"
            defaultValue={query}
          />
          <button
            type="submit"
            className="button-search fa-solid fa-magnifying-glass"
          />

          <img className="img-search" src={ImgSearch} alt="" />
        </div>
      </form>
    </section>
  );
}

export default Search;
