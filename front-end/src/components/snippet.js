import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSnippet, setSnippet } from '../reducers/snippetSlice';
// importing a code highlighter + style to properly display the code snippet
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Snippet = ({ toOverview }) => {
  const dispatch = useDispatch();
  const snippet = useSelector(selectSnippet);

  //CM: refactored code below to avoid unnecessary usage of usestate
  //declare a function pullfullsnippet that will grab the snippet based on title
  const pullFullSnippet = async () => {
    try {
      const response = await fetch('/one', {
        method: 'POST',
        body: JSON.stringify({ title: snippet.title }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data); // CM: used to diagnose the continual refresh of snippet problem in useeffect
        dispatch(setSnippet(data)); // set snippet in Redux store
      } else {
        console.error('Error fetching snippet data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching snippet data:', error);
    }
  };

  //invoke pullfullsnippet if a snippet is found in redux store
  useEffect(() => {
    if (snippet) {
      pullFullSnippet();
    }
  }, [dispatch]);
  //CM: removed snippet as a dependency of useeffect to ensure that the useeffect is only triggered once

  // until the full snippet has loaded, display a loading message
  if (!snippet) {
    return <div>Loading...</div>; // displays until snippet has loaded
  }

  const { title, code, tags, description } = snippet;

  return (
    <div id="snippet">
      <button onClick={toOverview} className="back">
        {'←'}
      </button>
      <h1>{title}</h1>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        showLineNumbers
        lineNumberStyle={{
          minWidth: '2em',
          padding: '0 1em',
          borderRight: '1px solid #ddd',
        }}
      >
        {code}
      </SyntaxHighlighter>
      <p>Tags: {tags.join(', ')}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Snippet;
