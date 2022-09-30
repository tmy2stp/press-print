import { Link } from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom";
import "./Header.scss";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
    return (
        <header id="header" class="header">
            
            <div>
        <Sidebar />
        </div>
        <div>
        <Link to="/" className="header__logo">
                Press</Link>
        </div>
        </header>
    );
}

export default Header;