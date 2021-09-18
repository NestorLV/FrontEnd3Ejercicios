import React from "react";
import {useParams} from 'react-router-dom'  // devuelve pares clave valor
import Article1 from "./Article1";
import Article2 from "./Article2";

const Article = (props) => {
    let {id} = useParams();
    return (
        <div>
            <hr/>
            <h1>Article Main</h1>
            {id==="1"?<Article1/>:<Article2/>}

        </div>
    );
};
export default Article;
