import React from "react";
import Articles from "../components/articles";
// import Layout from "../components/layout";
// import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ articles }) => {
  return (
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          {/* <h1>{homepage.hero.title}</h1> */}
          <Articles articles={articles} />
        </div>
      </div>

  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles] = await Promise.all([
    fetchAPI("/api/articles")]);

  return {
    props: { articles },
    revalidate: 1,
  };
}

export default Home;