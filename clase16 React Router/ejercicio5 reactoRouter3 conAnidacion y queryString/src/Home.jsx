import React from 'react';
import { Link } from 'react-router-3';

const Home = (props) => {
    return (
        <div>
            <ul>
                <li><Link to="/main">Main</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/faq">Faq</Link></li>
                <li><Link to="/main/article/101">Article</Link></li>
            </ul>
            <hr />
            {props.children}
            <hr/>
        </div>
    );
};
export default Home;