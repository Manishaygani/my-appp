import React, { FC, useState, useEffect } from "react";
import styled from "./Articles.module.css";
import ArticlesIntroduction from "../articlesintroduction/ArticlesIntroduction";
import ArticlesBox from "../articlesBox/ArticlesBox";
interface IArticles {}

const Articles: FC<IArticles> = ({}) => {
  return (
    <div className={styled.articles}>
      <ArticlesIntroduction />
      <ArticlesBox />
    </div>
  );
};

export default Articles;
