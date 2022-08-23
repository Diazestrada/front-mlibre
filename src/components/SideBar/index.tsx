import React from "react";

import "./styles.scss";

import Logo from "../../assets/Logo.png";
import Search from "../../assets/ic_Search.png";

interface IguiSideBar {
  onChange(event: string): void;
  onClick?(): void;
}

const SideBar: React.FC<IguiSideBar> = (props: IguiSideBar) => {

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
            onChange={(event) => props.onChange(event.target.value)}
          />
          <button
            className="btn "
            type="button"
            id="buttonSearch"
             onClick={props.onClick}
          >
            <img src={Search} alt="search" className="img-fluid" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
