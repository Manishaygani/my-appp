import React, { FC, useState, useEffect } from "react";
import styled from "./Navbar.module.css";
interface INavbar {}

const Navbar: FC<INavbar> = ({}) => {
  return (
    <div className={styled.navbar}>
      <ol>
        <a href="/">
          <li>characters</li>
        </a>
        <li>pokemon</li>
        <li>video gallery</li>
      </ol>
    </div>
  );
};

export default Navbar;
