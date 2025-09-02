import React from 'react';

const NewsItem = ({ title, description, url, imageUrl }) => {
    const imageSrc = imageUrl && imageUrl.trim() !== '' ? imageUrl : 'https://dummyimage.com/150x150/000/fff'; // Fallback image


  return (
    <div className="news-item">
      <img src={imageSrc} alt="news" style={{ width: '100px', height: 'auto' }}/>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default NewsItem;


