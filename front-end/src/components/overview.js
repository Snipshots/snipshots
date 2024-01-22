import React, { useState, useEffect } from 'react';
import SnippetCard from './SnippetCard';

const Overview = ({ dispatchNav, setSnippetAndNavigate }) => {
  const [allSnips, setAllSnips] = useState([]);

  useEffect(() => {
    // fetch all snippet cards via /all route when the component mounts
    fetch('/all')
      .then((response) => response.json())
      .then((data) => setAllSnips(data.reverse()))
      .catch((error) => console.error('Error when fetching snippets:', error));
  }, []);

  const createSnippet = () => {
    dispatchNav('post');
  };

  const handleSnippetClick = (snippet) => {
    setSnippetAndNavigate(snippet);
  };

  return (
    <div id='overview'>
      <h1>Your Snippets</h1>
      <button onClick={createSnippet}>Post new Snippet!</button>
      {allSnips.map((snip) => (
        <SnippetCard
          key={snip._id}
          snippet={snip}
          displaySnippet={() => handleSnippetClick(snip)}
        />
      ))}
    </div>
  );
};

export default Overview;
