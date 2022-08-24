import React, { useState, useMemo } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  useNavigate,
} from "react-router-dom";

import "./styles.scss";

import Logo from "../../assets/Logo.png";
import Search from "../../assets/ic_Search.png";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate(`/items?search=${search}`);
  };

  return (
    <nav className="navbar navbar-expand-lg" id="backgraundNav">
      <div className="container d-flex justify-content-center w-75">
        <a className="navbar-brand" href="/">
          <img src={Logo} className="img-fluid" id="imgLogo" alt="Responsive" />
        </a>

        <div className="input-group">
          <input
            className="form-control"
            placeholder="Nunca dejes de buscar"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />
          <button
            className="btn "
            type="button"
            id="buttonSearch"
            onClick={goToProduct}
          >
            <img src={Search} alt="search" className="img-fluid" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
