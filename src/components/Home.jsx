import "./Home.css";
// import ImageSlider from "./ImageSlider";
// import { SliderData } from "./SliderData";
import logger from "../utils/logger";
import Slider from "./Slider/Slider";

function Home() {
  logger.debug("Home -> render");

  return (
    <div className="gradient">
      <div className="container-verse">
        <p className="verse">
          "In photography there is a reality so subtle that it becomes more real
          than reality"
          <br /> -Alfred Stieglitz-
        </p>

        <Slider />

        {/* <ImageSlider slides={SliderData} /> */}
      </div>

      <p className="text">
        Search for photos in the search bar.
        <br /> Then click on the picture you like and you will be able to know
        more details. <br />
        Don't forget to save it in favorites!
        <br />
        <br />
        Look the photos that I found when I searched the word 'Italy'.
      </p>

      <ul className="box-photos-home">
        <li className="list-photos-home">
          <img
            className="photo-home"
            src="https://images.unsplash.com/photo-1516108317508-6788f6a160e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXRhbHl8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </li>
        <li className="list-photos-home">
          <img
            className="photo-home"
            src="https://images.unsplash.com/photo-1615731022580-ffb2f9e45960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGl0YWx5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </li>
        <li className="list-photos-home">
          <img
            className="photo-home"
            src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbHl8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </li>

        <li className="list-photos-home">
          <img
            className="photo-home"
            src="https://images.unsplash.com/photo-1602532769886-b2d169960426?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGl0YWx5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </li>
        <li className="list-photos-home">
          <img
            className="photo-home"
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXRhbHl8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </li>
        <li className="list-photos-home">
          <img
            className="photo-home"
            src="https://images.unsplash.com/photo-1534445867742-43195f401b6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXRhbHl8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </li>
        <li className="list-photos-home">
          <img
            className="photo-home"
            src="https://images.unsplash.com/photo-1568708090021-556f292b4fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGl0YWx5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </li>
        <li className="list-photos-home">
          <img
            className="photo-home"
            src="https://images.unsplash.com/photo-1561716514-daea32af173e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aXRhbHl8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </li>

        <li className="list-photos-home">
          <img
            className="photo-home"
            src="https://images.unsplash.com/photo-1570025796121-87d2d9b69ca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
          />
        </li>

        <li className="list-photos-home">
          <img
            className="photo-home"
            src="https://images.unsplash.com/photo-1532117472055-4d0734b51f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGl0YWx5fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </li>

        <li className="list-photos-home">
          <img
            className="photo-home"
            src="https://images.unsplash.com/photo-1591574219889-0e7af0a0f129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGl0YWx5fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </li>

        <li className="photo-last-home"></li>
      </ul>

      <div>
        <p className="text-bottom">
          Now it's your turn! Go to 'Search' and find your photos!
        </p>
      </div>
    </div>
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
