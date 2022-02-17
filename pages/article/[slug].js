import React from "react";
import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../lib/api";

const Article = ({ article }) => {
 
  return (
      <div>
        <div >
        <h1>{article.Title}</h1>
        <ReactMarkdown>{article.Description}</ReactMarkdown>
        </div>
      </div>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/api/articles");

  return {
    paths: articles.data.map((article) => (
        {
      params: {
        slug: `${article.id}`,
      },
    })),
    fallback: false,
  };
  
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/api/articles/${params.slug}`
  );
  return {
    props: { article: articles.data.attributes },
    revalidate: 1,
  };
}

export default Article;