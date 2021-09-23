import * as React from "react";
import "./Button.css";
import Button from "@mui/material/Button";

const BasicButton = ({ text, icon }) => {
  return (
    <Button
      className="custom_btn"
      endIcon={icon ? <div className="custom_icon">{icon}</div> : null}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default BasicButton;
