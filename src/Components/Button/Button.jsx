import React from "react";
import "../../assets/style/globle.scss";
import { Button } from "reactstrap";

const ButtonPrimarry = ({ children }) => {
  return <Button className="btn_primary">{children}</Button>;
};

export default ButtonPrimarry;
