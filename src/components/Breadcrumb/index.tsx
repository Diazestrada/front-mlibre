import React from "react";

import "./styles.scss";

interface IBreadcrumb {
  items: any;
}

const Breadcrumb: React.FC<IBreadcrumb> = (props: IBreadcrumb) => {
  return (
    <div className="m-3 d-flex justify-content-between" id="containcenter">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb ">
          {props.items["categories"].length > 0 &&
            props.items["categories"].map((item: any, index: number) => (
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
