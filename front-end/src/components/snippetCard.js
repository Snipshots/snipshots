import React, { Component } from 'react';

//
const SnippetCard = ({ snippet }) => {
  const { title, tags } = snippet;
  // overwriting for pseudo data to generate an example!
  //title = 'How to make a fetch request';
  //tags = ['ajax', 'fetch', 'async'];

  const handleClick = () => {
    console.log('card clicked!');
  };
  return (
    <div className='snippetCard' onClick={handleClick}>
      <h2>{title}</h2>
      <p>Tags: {tags.join(', ')}</p>
    </div>
  );
};

export default SnippetCard;
