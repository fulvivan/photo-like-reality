import React, { useEffect } from 'react';

import "./Home.css";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import logger from "../utils/logger";

function Home() {
  logger.debug("Home -> render");

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme)
    }
})
  
  // const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext);

  // const navigate = useNavigate();

  // const queryParams = useQueryParams();

  // const [query, setQuery] = useState(queryParams.get("query"));
  // const [view, setView] = useState("home");
  // const [items, setItems] = useState([]);

  // const resetToken = () => {
  //   sessionStorage.clear();

  //   // goToHome();

  //   // onFlowEnd();
  //   navigate("/");
  // };

  // const search = (query) => {
  //   setQuery(query);

  //   navigate(`/search/items?query=${query}`);
  // };

  // const toggleFav = async (item_id) => {
  //   try {
  //     onFlowStart();
  //     const token = sessionStorage.token;
  //     console.log(token);

  //     if (!token) {
  //       alert("Registrati o Accedi");
  //     } else {
  //       await toggleFavItem(token, item_id);

  //       setItems(
  //         items.map((item) => {
  //           if (item.item_id === item_id) {
  //             return { ...item, isFav: !item.isFav };
  //           }

  //           return item;
  //         })
  //       );
  //     }

  //     onFlowEnd();
  //   } catch ({ message }) {
  //     onFlowEnd();

  //     onModal(message, "warn");
  //   }
  // };

  // const goToSearch = () => {
  //   setView("not-home");

  //   navigate("/search");
  // };

  // const goToAccount = () => {
  //   setView("not-home");

  //   navigate("/account");
  // };

  // const goToFavs = () => {
  //   // setView("not-home");

  //   navigate("/favs");
  // };

  // const goToItem = (id) => navigate(`/search/items/item?id=${id}`);

  // const goToProfile = () => {
  //   setView("not-home");

  //   navigate("/profile");
  // };

  // const goToHome = () => {
  //   setView("home");

  //   navigate("/");
  // };
  // const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext);

  return <>
    <div className="page-home">
       <ImageSlider slides={SliderData} />
    </div>
   
    <div>
       <p className='verse'>
        "In photography there is a reality so subtle that it becomes more real than reality"<br /> -Alfred Stieglitz-
      </p>
    </div>
    <div>
      <p className='text'>
      Search for photos in the search bar.<br/> Then click on the photo you like and you will be able to know more details. <br/>Don't forget to save it in favorites!
      </p>
    </div>
   
  </>
 
  

  // <section className="background">
  //   <div className="content">

  //       <p className="header">
  //       </p>

  //     <p className="p1">
  //       "In photography there is a reality so subtle that it becomes more real than reality"<br /> -Alfred Stieglitz-
  //     </p>

  //     <p className="p2">Search for photos in the search bar.<br/><br/> Then click on the photo you like <br/>and you will be able to know more details. <br/><br/>Don't forget to save it in favorites!
  //     </p>

  //     {/* <p>
  //       "In photography there is a reality so subtle that it becomes more real than reality"<br /> -Alfred Stieglitz-
  //       "In photography there is a reality so subtle that it becomes more real than reality"<br /> -Alfred Stieglitz-
  //       "In photography there is a reality so subtle that it becomes more real than reality"<br /> -Alfred Stieglitz-
  //       "In photography there is a reality so subtle that it becomes more real than reality"<br /> -Alfred Stieglitz-
  //       "In photography there is a reality so subtle that it becomes more real than reality"<br /> -Alfred Stieglitz-
  //       "In photography there is a reality so subtle that it becomes more real than reality"<br /> -Alfred Stieglitz-
  //       "In photography there is a reality so subtle that it becomes more real than reality"<br /> -Alfred Stieglitz-
  //       "In photography there is a reality so subtle that it becomes more real than reality"<br /> -Alfred Stieglitz-
  //     </p> */}

  //       {/* <button onClick={onFlowStart}>start</button>
  //     <br />
  //     <button onClick={onFlowEnd}>end</button> */}
  //       {/* buttom sopra era per testare lo spinner */}

  //       {/* <button onClick={()=> onModal ("jwt expired","error")}>Modal</button>
  //        */}
  //     </div>
  // </section>
}

export default Home;
