import React, { useEffect, useState } from "react";

import "./styles.scss";

import { formatCurrency } from "../../../utils/currencyUtils";

import { getByIdProduct } from "helpers/product";

interface ICardProductDtails {
  id: string;
}

const CardProductDetails: React.FC<ICardProductDtails> = (
  props: ICardProductDtails
) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    geyBYidProduct();
  });

  const geyBYidProduct = async () => {
    try {
      const data = await getByIdProduct(props.id);
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {product !== undefined && product !== null ? (
        <div className="card border-0 mt-1 p-4 border-bottom">
          <div className="row">
            <div className="col-md-7 d-flex">
              <img
                src={product["item"]["picture"]}
                className="img-fluid"
                id="img"
                alt="..."
              />
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <p className="card-text" id="text">
                  {product["item"]["condition"] === "new" ? "Nuevo" : ""} -{" "}
                  {product["item"]["sold_quantity"]} vendido
                </p>
                <h5 className="card-title" id="cardTitle">
                  {product["item"]["title"]}
                </h5>
                <h5 className="card-title" id="priceTitle">
                  {formatCurrency(product["item"]["price"]["amount"])}
                </h5>

                <div className="d-grid gap-2  w-50 p-1">
                  <button className="btn btn-primary" type="button">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <h5 className="card-title" id="cardTitle">
            Descripcion de prodcuto
          </h5>

          <p className="card-text text-justify" id="text">
            {product["item"]["description"]}
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CardProductDetails;
