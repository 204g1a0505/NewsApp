import React, { useEffect, useState } from 'react';
import { fetchNews } from './Api'
import NewsItem from './NewsItem';

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const newsArticles = await fetchNews();
      setArticles(newsArticles);
      console.log(newsArticles);
    };
    getNews();
  }, []);

  return (
    <div className="news-list">
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <NewsItem
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            imageUrl={article.urlToImage}
          />
        ))
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
};

export default NewsList;
