import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Sidebar.scss';

export default props => {
    return (
      // Pass on our props
      <Menu {...props}>
        <a className="menu-item" href="/">
          Home
        </a>
  
        <a className="menu-item" href="/host">
          Host
        </a>
  
        <a className="menu-item" href="/print">
          Print
        </a>
  
        <a className="menu-item" href="/about">
          About
        </a>
        <a className="menu-item" href="/landing">
          Home / Landing
        </a>
      </Menu>
    );
  };