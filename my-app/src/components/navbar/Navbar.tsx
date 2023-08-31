import React, { FC, useState, useEffect } from "react";
import styled from "./Navbar.module.css";
interface INavbar {}

const Navbar: FC<INavbar> = ({}) => {
  return (
    <div className={styled.navbar}>
      <ol>
        <li>characters</li>
        <li>pokemon</li>
        <li>video gallery</li>
      </ol>
    </div>
  );
};

export default Navbar;
