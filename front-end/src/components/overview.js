import React, { Component } from 'react';
import SnippetCard from './snippetCard';

const Overview = ({ dispatchNav }) => {
  function posted() {
    dispatchNav('post');
  }

  return (
    <div id='overview'>
      <h1>Your Snippets</h1>
      <SnippetCard />
      <SnippetCard />
      <SnippetCard />
      <button onClick={posted}>Post Code</button>
    </div>
  );
};

export default Overview;
