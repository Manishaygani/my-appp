import React, { FC, useState, useEffect } from "react";
import styled from "./ArticlesBox.module.css";
import ArticlesImg from "../articleImg/ArticlesImg";
interface IArticlesBox {}

const ArticlesBox: FC<IArticlesBox> = ({}) => {
  return (
    <div className={styled.articlesBox}>
      <ArticlesImg />
    </div>
  );
};

export default ArticlesBox;
