import React from "react";
import { Link, Route } from "react-router-dom";
import Blog from "./Blog";
import Vlog from "./Vlog";

const Main = (props) => {
    return (
        <div>
            <h1>Main</h1>
            <ul>
                <li> <Link to={'/main/blog'}>Blog</Link> </li>
                <li> <Link to={'/main/vlog'}>Vlog</Link> </li>
            </ul>
            <hr />
            <Route path={'/main/blog'}> <Blog /> </Route>
            <Route path={'/main/vlog'}> <Vlog /> </Route>
        </div>
    );
};
export default Main;