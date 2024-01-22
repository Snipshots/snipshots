import React, { Component } from 'react';

const SnippetCard = ({ snippet, displaySnippet }) => {
  const { title, tags } = snippet;

  return (
    <div className='snippetCard' onClick={displaySnippet}>
      <h2>{title}</h2>
      <p>Tags: {tags.join(', ')}</p>
    </div>
  );
};

export default SnippetCard;
