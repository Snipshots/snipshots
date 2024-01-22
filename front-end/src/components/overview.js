import React, { useState, useEffect } from 'react';
import SnippetCard from './SnippetCard';

const Overview = ({ dispatchNav, setSnippetAndNavigate }) => {
  const [allSnips, setAllSnips] = useState([]);

  //here we're using react's stateful component. However, the rest of our code is writtn redux. Can you update it to use in redux? 
  useEffect(() => {
    // fetch all snippet cards (title + tags) via /all route when the component mounts
    fetch('/all')
      .then((response) => response.json())
      .then((data) => setAllSnips(data.reverse()))
      .catch((error) => console.error('Error when fetching snippets:', error));
  }, []);

  // swap out the current component for the post component
  const createSnippet = () => {
    dispatchNav('post');
  };

  // after clicking on a snippet card, call the passed in function that grabs the full snippet and swaps in the snippet component
  const handleSnippetClick = (snippet) => {
    setSnippetAndNavigate(snippet);
  };

  // render all snippet cards that we grabbed previously passing in the snippet data
  // mapping all snippets onto SnippetCard copm
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
