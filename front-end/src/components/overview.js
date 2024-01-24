import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllSnippets } from '../reducers/overviewSlice';
import SnippetCard from './SnippetCard';

const Overview = ({ dispatchNav, setSnippetAndNavigate }) => {
  //declaring variables to utilize usedispatch from useselector from redux library, managing overviewSnippets state
  const dispatch = useDispatch();
  const allSnips = useSelector((state) => state.overview.overviewSnippets);

  //using useeffect here to dipsatch the fetchallsnippets function that exists in the overviewslice file
  useEffect(() => {
    dispatch(fetchAllSnippets());
  }, [dispatch]);

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
    <div id="overview">
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
