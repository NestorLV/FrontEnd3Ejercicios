import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/main">Main</Link></li>
                <li><Link to={'/article/1'}>Article1</Link></li>
                <li><Link to={'/article/2'}>Article2</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/Error">Error</Link></li>
            </ul>
        </>
    );
};
export default Nav;