import React, { useEffect, useState } from "react";

import SideBar from "components/SideBar";
import Contain from "components/Contain";
import CardProducts from "components/Cards/CardProducts";
import Breadcrumb from "components/Breadcrumb";

import { getProductsSearch } from "../../../helpers/product";

const HomeScreen = () => {
  const [products, setProducts] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {}, [products]);

  const searchProduct = async () => {
    try {
      const data = await getProductsSearch(search);
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onchangeSideBar = (search: string) => {
    setSearch(search);
  };

  return (
    <div>
      <SideBar onChange={(e) => onchangeSideBar(e)} onClick={searchProduct} />
      {Object.keys(products).length > 0 && 
        <>
        <Breadcrumb items={products}/>
        </>
      }
      <Contain>
        <CardProducts data={products} />
      </Contain>
    </div>
  );
};

export default HomeScreen;
