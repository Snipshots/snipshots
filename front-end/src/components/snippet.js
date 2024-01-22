import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSnippet, setSnippet } from '../reducers/snippetSlice';
// importing a code highlighter + style to properly display the code snippet
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Snippet = ({toOverview}) => {
  const dispatch = useDispatch();
  const snippet = useSelector(selectSnippet);
  const [selectedSnippet, setSelectedSnippet] = useState(null);

  useEffect(() => {
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
          setSelectedSnippet(data);
          dispatch(setSnippet(data)); // set snippet in Redux store
        } else {
          console.error('Error fetching snippet data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching snippet data:', error);
      }
    };

    if (snippet) {
      pullFullSnippet();
    }
  }, [snippet, dispatch]);

  if (!selectedSnippet) {
    return <div>Loading...</div>; // displays until snippet has loaded
  }

  const { title, code, tags, description } = selectedSnippet;

  return (
    <div id='snippet'>
      <button onClick={toOverview} className='back'>{'←'}</button>
      <h1>{title}</h1>
      <SyntaxHighlighter language="javascript" style={vscDarkPlus} showLineNumbers lineNumberStyle={{ minWidth: '2em', padding: '0 1em', borderRight: '1px solid #ddd' }}>
        {code}
      </SyntaxHighlighter>
      <p>Tags: {tags.join(', ')}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Snippet;
