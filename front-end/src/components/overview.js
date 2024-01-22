import React, { useState, useEffect, Component } from 'react';
import SnippetCard from './snippetCard';

const Overview = ({ dispatchNav }) => {
  const [allSnips, setAllSnips] = useState([]);
  
  useEffect(() => {
    // Fetch all snippet cards via /all route when the component mounts
    fetch('/all')
    .then((response) => response.json())
    .then((data) => setAllSnips(data.reverse()))
    .catch((error) => console.error('Error when fetching snippets:',error));
  }, [])
  function posted() {
    dispatchNav('post');
  }

  return (
    <div id='overview'>
      <h1>Your Snippets</h1>
      <button onClick={posted}>Post new Snippet!</button>
      { /* <SnippetCard />
      <SnippetCard />
      <SnippetCard /> */ }
      {allSnips.map((snip) => (        
        <SnippetCard key={snip._id} snippet={snip} />
      ))}      
    </div>
  );
};

export default Overview;
