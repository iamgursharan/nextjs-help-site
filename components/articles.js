import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  return (
    <div>
        <div>
            <div>
                {articles.data.map((article,i)=>{
                    return(
                        <Card article={article} key={`${article.id}`}></Card>
                    )
                })}
            </div>
        </div>
    </div>
  );
};

export default Articles;