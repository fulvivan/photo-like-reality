import "./Home.css";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import logger from "../utils/logger";

function Home() {
  logger.debug("Home -> render");

  return (
    <>
      <div className="page-home">
        <ImageSlider slides={SliderData} />
      </div>

      <div className="container-verse">
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
          <br />
          <br />
          Look photos I found with word 'landscape'.
        </p>
      </div>
      <ul className="box-photos-home">
        <li className="list-photos-home">
           <img className="photo-home" src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60" alt="" />
        </li>
        <li className="list-photos-home">
           <img className="photo-home" src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60" alt="" />
       </li>
        <li className="list-photos-home">
           <img className="photo-home" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHNjYXBlc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60" alt="" />
       </li>
        <li className="list-photos-home">
           <img className="photo-home" src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZHNjYXBlc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60" alt="" />
       </li>
        <li className="list-photos-home">
          <img className="photo-home" src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60" alt="" />
       </li>
        <li className="list-photos-home">
          <img className="photo-home" src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmRzY2FwZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
        </li>
        <li className="list-photos-home">
           <img className="photo-home" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxhbmRzY2FwZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
        </li>
        <li className="list-photos-home">
          <img className="photo-home" src="https://images.unsplash.com/photo-1513875528452-39400945934d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGxhbmRzY2FwZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" />
       </li>
        <li className="list-photos-home">
          <img className="photo-home" src="https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGxhbmRzY2FwZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" />
        </li>
        <li className="list-photos-home">
           <img className="photo-home" src="https://images.unsplash.com/photo-1444930694458-01babf71870c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGxhbmRzY2FwZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" />
        </li>
        <li className="list-photos-home">
          <img className="photo-home" src="https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGxhbmRzY2FwZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" />
       </li>
       <li className="photo-last-home"></li>
      </ul>
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
