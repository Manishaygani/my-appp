import React, { FC, useState, useEffect } from "react";
import styled from "./Home.module.css";
import Navbar from "../../components/navbar/Navbar";
import Articles from "../../components/articles/Articles";
import ArticleParagrafh from "../../components/ArticleParagrafh/ArticleParagrafh";
interface IHome {}

const Home: FC<IHome> = ({}) => {
  return (
    <div className={styled.Home}>
      <Navbar />
      <Articles />
      <ArticleParagrafh />
    </div>
  );
};

export default Home;
