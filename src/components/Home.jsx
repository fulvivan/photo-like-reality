import React, { useEffect, useState, useContext } from "react";
import useQueryParams from "../hooks/use-query-params";
import {searchItems} from '../logic'
import "./Home.css";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import logger from "../utils/logger";
import AppContext from "./AppContext";
import { useNavigate } from "react-router-dom";

function Home() {
  logger.debug("Home -> render");

   const [items, setItems] = useState();
  // const queryParams = useQueryParams();
  // const { token } = sessionStorage;
  // const query = queryParams.get("landscape");
  // const navigate = useNavigate();
  // const goToItem = (id) => navigate(`/search/items/item?id=${id}`);
  // const { onModal } = useContext(AppContext);

  // useEffect(() => {
  //   (async () => {
  //     logger.debug("Results -> useEffect");

  //     try {
        

  //       const resultsContainer = await searchItems(token, query);
  //       console.log(resultsContainer);

      

  //       const photos = resultsContainer.results;
  //       console.log(photos);

  //       setItems(photos);
  //     } catch ({ message }) {
  

  //       onModal(message, "warn");
  //     }
  //   })();
  // }, [query]);

  const landscapes = async () => {
    const photos = await fetch(
      "https://api.unsplash.com/search/photos?query=landscapes&per_page=20&client_id=H4XWB85U0K6PzqCLUkPQt_2qnlGnd8C5JORrZfjXOH0"
    );
    const resultsPhotos = await photos.json();
    console.log(resultsPhotos);
   
  };

  useEffect(() => {
    const resultsContainer = landscapes();
    const res = resultsContainer.results;
     setItems(res);
  }, []);




  useEffect(() => {
    const currentTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : null;

    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
  });

  return (
    <>
      <div className="page-home">
        <ImageSlider slides={SliderData} />
      </div>

      <div>
        <p className="verse">
          "In photography there is a reality so subtle that it becomes more real
          than reality"
          <br /> -Alfred Stieglitz-
        </p>
      </div>
      <div>
        <p className="text">
          Search for photos in the search bar.
          <br /> Then click on the photo you like and you will be able to know
          more details. <br />
          Don't forget to save it in favorites!
          <br /><br />
          Look photos I found with word 'landscape'.
        </p>
      </div>
      <ul className="container-page">
        
          <li  className="container-results" >
            <img
              className="results-photo"
              title="detail"
              src={landscapes.results}
              alt=""
            />
          </li>
        
          </ul>

      {/* <ul className="container-page">
        {items.map(({ id, urls }) => (
          <li key={id} className="container-results" >
            <img
              className="results-photo"
              title="detail"
              src={urls.thumb}
              alt=""
              onClick={() => goToItem(id)}
            />
          </li>
        ))}
          </ul> */}
    </>
  );

  //       {/* <button onClick={onFlowStart}>start</button>
  //     <br />
  //     <button onClick={onFlowEnd}>end</button> */}
  //       {/* buttom sopra era per testare lo spinner */}

  //       {/* <button onClick={()=> onModal ("jwt expired","error")}>Modal</button>
  //}
  //     </div>
  // </section>
}

export default Home;
