import React, { useMemo, useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import SideBar from "components/SideBar";

import Contain from "components/Contain";
import CardProducts from "components/Cards/CardProducts";
import Breadcrumb from "components/Breadcrumb";

import { getProductsSearch } from "helpers/product";

const SearchResultScreen = () => {
  const [product, setProduct] = useState({});
  const navegate = useNavigate();

  useEffect(() => {
    if (query !== "") {
      getProducts();
    }
  }, []);

  const useQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  };

  const query = useQuery().get("search");

  const getProducts = async () => {
    try {
      const data = await getProductsSearch(query);
      console.log(data)
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  const goDetailProduct = (event: any) => {
    navegate(`/items/${event}`);
  };

  return (
    <div>
      <SideBar />
      <Breadcrumb items={product} />
      <Contain>
        <CardProducts
          data={product}
          onclickChange={(e) => goDetailProduct(e)}
        />
      </Contain>
    </div>
  );
};

export default SearchResultScreen;
