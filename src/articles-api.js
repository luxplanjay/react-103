import axios from "axios";

axios.defaults.baseURL = "http://hn.algolia.com/api/v1";

export const fetchArticles = async (topic, currentPage) => {
  const res = await axios.get("/search", {
    params: {
      query: topic,
      page: currentPage,
      hitsPerPage: 5,
    },
  });

  return res.data.hits;
};
