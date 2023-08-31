import React, { FC, useState, useEffect } from "react";
import styled from "./ArticlesIntroduction.module.css";
interface IArticlesIntroduction {}

const ArticlesIntroduction: FC<IArticlesIntroduction> = ({}) => {
  return (
    <div className={styled.articlesIntroduction}>
      <h1>characters</h1>
    </div>
  );
};

export default ArticlesIntroduction;
