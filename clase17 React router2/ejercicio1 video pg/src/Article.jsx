import React from "react";

const Article = (props) => {
    return (
        <div>
            <hr/>
            <h1>Article</h1>
            <h2>Llegue desde el queryString por titleId: "{props.params.titleId}</h2>
            {console.log(props)}
        </div>
    );
};
export default Article;
