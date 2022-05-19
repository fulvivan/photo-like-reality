import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import logger from "../utils/logger";
import Navbar from "./Navbar";
import Search from "./Search";
import Results from "./Results";
import Detail from "./Detail";
import Profile from "./Profile";
import Favs from "./Favs";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Spinner from "./Spinner";
import Modal from "./Modal";
import AppContext from "./AppContext";
import Unregister from "./Unregister";
import Update from "./Update";

function App() {
  logger.debug("App -> render");

  const navigate = useNavigate();

  const resetToken = () => {
    sessionStorage.clear();

    navigate("/");
  };

  const [modal, setModal] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const [level, setLevel] = useState(null);

  const showSpinner = () => setSpinner(true);

  const hideSpinner = () => setSpinner(false);

  const showModal = (message, level = "error") => {
    setModal(message);
    setLevel(level);
  };

  const acceptModal = () => setModal(null);

  return (
    <>
      <AppContext.Provider
        value={{
          onFlowStart: showSpinner,
          onFlowEnd: hideSpinner,
          onModal: showModal,
        }}
      >
        {spinner && <Spinner />}

        <Navbar />

        {modal && (
          <Modal
            level={level}
            message={modal}
            onAccept={acceptModal}
            onReset={resetToken}
          />
        )}

        {/* Nella versione di React6 è sostituito Switch con Routes */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
          <Route path="search/items" element={<Results />} />
          <Route path="search/items/item" element={<Detail />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/profile"
            element={<Profile onReset={resetToken} />}
          />
          <Route path="profile/update" element={<Update />} />
          <Route path="profile/unregister" element={<Unregister />} />
          <Route exact path="/favs" element={<Favs />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
