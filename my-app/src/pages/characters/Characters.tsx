import React, { FC, useState, useEffect } from "react";
import styled from "./Characters.module.css";
import Navbar from "../../components/navbar/Navbar";
import Articles from "../../components/articles/Articles";
import ArticleParagrafh from "../../components/ArticleParagrafh/ArticleParagrafh";
interface ICharacters {}

const Characters: FC<ICharacters> = ({}) => {
  return (
    <div className={styled.Characters}>
      <Navbar />
      <Articles />
      <ArticleParagrafh />
    </div>
  );
};

export default Characters;
