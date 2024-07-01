import { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import ArticleList from "../ArticleList/ArticleList";
import { fetchArticles } from "../../articles-api";
import css from "./App.module.css";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");
  const [totalPages, setTotalPages] = useState(999);

  const handleSearch = async (newTopic) => {
    setArticles([]);
    setPage(1);
    setTopic(newTopic);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (topic === "") {
      return;
    }

    async function getArticles() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchArticles(topic, page);
        setTotalPages(data.nbPages);
        setArticles((prevArticles) => {
          return [...prevArticles, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getArticles();
  }, [page, topic]);

  return (
    <div className={css.container}>
      <h1>HTTP requests in React</h1>
      {page >= totalPages && <p>THIS IS THE END! RUN FOOLS!</p>}
      <SearchForm onSearch={handleSearch} />
      {articles.length > 0 && <ArticleList items={articles} />}
      {loading && <p>Loading articles, please wait...</p>}
      {error && <p>Oops! There was an error, please reload this page!</p>}
      {articles.length > 0 && !loading && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </div>
  );
}
