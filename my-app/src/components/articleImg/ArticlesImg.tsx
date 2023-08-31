import React, { FC, useState, useEffect } from "react";
import ax from "./desktop-wallpaper-attack-on-titan-wiki-featured-archive-anime-attack-on-titan-wiki-fandom-eren-season-4.jpg";
import styled from "./ArticlesImg.module.css";
interface IArticlesImg {}

const ArticlesImg: FC<IArticlesImg> = ({}) => {
  return (
    <div className={styled.articlesImg}>
      <img src={ax} alt="" />
    </div>
  );
};

export default ArticlesImg;
