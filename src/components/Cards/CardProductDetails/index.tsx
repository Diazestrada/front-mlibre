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
  }, []);

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
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">
                  {formatCurrency(product["item"]["price"]["amount"])}
                </h5>
                <p className="card-text">w</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CardProductDetails;
