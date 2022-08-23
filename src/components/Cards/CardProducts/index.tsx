import React from "react";

import "./styles.scss";

import { formatCurrency } from "../../../utils/currencyUtils";

import FreeShipping from "assets/ic_shipping.png";

interface ICardProduct {
  data: any;
}

const CardProducts = (props: ICardProduct) => {

  return (
    <>
      {props.data["items"] !== undefined &&
      props.data["items"] !== null &&
      Array.isArray(props.data["items"]) ? (
        props.data["items"].map((item) => (
          <div className="card border-0 mt-1 p-4 border-bottom">
            <div className="row">
              <div className="col-md-2 d-flex">
                <img
                  src={item["picture"]}
                  className="rounded justify-content-end"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    {formatCurrency(item["price"]["amount"])}
                    &nbsp; &nbsp;
                    {item["free_shopping"] ? (
                      <img src={FreeShipping} className="rounded" alt="..." />
                    ) : (
                      ""
                    )}
                  </h5>
                  <p className="card-text">{item["title"]}</p>
                </div>
              </div>
              <div className="col-md-2">
                <p className="card-text m-2 mt-5" id="textColor">{item["city_name"]}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>hola mundo</p>
      )}
    </>
  );
};

export default CardProducts;
