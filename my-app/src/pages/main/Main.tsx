import React, { FC, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "./Main.module.css";
import Characters from "../characters/Characters";
interface IMain {}

const Main: FC<IMain> = ({}) => {
  return (
    <div className={styled.main}>
      <Routes>
        <Route path="/" element={<Characters />} />
      </Routes>
    </div>
  );
};

export default Main;
