import React, { FC } from "react";

import BtnProps from "../types/BtnProps";

const Btn: FC<BtnProps> = (props) => {
  return (
    <button className={props.class} onClick={props.func}>
      {props.text}
    </button>
  );
};

export default Btn;
