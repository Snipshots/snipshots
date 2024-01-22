import React, { Component } from 'react';

const SnippetCard = ({ snippet, displaySnippet }) => {
  const { title, tags } = snippet;

  // render the title and tags that are passed in as a snippet card
  return (
    <div className='snippetCard' onClick={displaySnippet}>
      <h2>{title}</h2>
      <p>Tags: {tags.join(', ')}</p>
    </div>
  );
};

export default SnippetCard;
