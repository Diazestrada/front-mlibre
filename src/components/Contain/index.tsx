import React, { ReactNode } from "react";

import "./styles.scss";

interface Props {
  children?: ReactNode;
}

const Contain = ({ children }: Props) => {
  return (
    <div className="container" id="contain">
      {children}
    </div>
  );
};

export default Contain;
