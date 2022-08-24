import React from "react";
import "./styles.scss";

import { getItem } from "store";

const Breadcrumb = () => {
  const getItemCategories = JSON.parse(getItem("categories") || "");

  return (
    <div className="m-3 d-flex justify-content-between" id="containcenter">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb ">
          {getItemCategories.length > 0 &&
            getItemCategories.map((item: any, index: number) => (
              <li key={index} className="breadcrumb-item" aria-current="page">
                {item["name"]}
              </li>
            ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
