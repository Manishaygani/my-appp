import React, { FC, useState, useEffect } from "react";
import styled from "./ArticleParagrafh.module.css";
interface IArticleParagrafh {}

const ArticleParagrafh: FC<IArticleParagrafh> = ({}) => {
  return (
    <div className={styled.articleParagrafh}>
      <h4>eren yeager</h4>
    </div>
  );
};

export default ArticleParagrafh;
