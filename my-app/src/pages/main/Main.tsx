import React, { FC, useState, useEffect } from "react";
import styled from "./Main.module.css";
import Home from "../home/Home";
interface IMain {}

const Main: FC<IMain> = ({}) => {
  return (
    <div className={styled.main}>
      <Home />
    </div>
  );
};

export default Main;
