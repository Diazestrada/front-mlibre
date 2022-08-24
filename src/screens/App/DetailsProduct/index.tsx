import React from "react";

import { useLocation } from "react-router-dom";

import SideBar from "components/SideBar";
import Contain from "components/Contain";
import CardProductDetail from "components/Cards/CardProductDetails";
import Breadcrumb from "components/Breadcrumb";

const DetailProductScreen = () => {
  const { pathname } = useLocation();
  const id = pathname.replace("/items/", "");

  return (
    <div>
      <SideBar />
      <Breadcrumb />
      <Contain>
        <CardProductDetail id={id} />
      </Contain>
    </div>
  );
};

export default DetailProductScreen;
