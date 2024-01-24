import React, { Component } from 'react';

const SnippetCard = ({ snippet, displaySnippet }) => {
  const { title, tags } = snippet;

  // const deleteFullSnippet = async () => {
  //   try {
  //     const response = await fetch('/', {
  //       method: 'Delete',
  //       body: JSON.stringify({ snipId: string }),
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //
  //       dispatch(setSnippet(data)); // set snippet in Redux store
  //     } else {
  //       console.error('Error deleting snippet:', response.status);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching snippet data:', error);
  //   }
  // };

  // render the title and tags that are passed in as a snippet card
  return (
    <>
      <div className="snippetCard" onClick={displaySnippet}>
        <h2>{title}</h2>
        <p>Tags: {tags.join(', ')}</p>
      </div>
      {/*onClick needs to change to open snippet editor with curr txt still in it*/}
      <div id="footer" className="snippetCardButtons">
        {/* <button onClick= className='edit'>Edit</button> */}
        <button onClick={deleteSnippet} className="delete">
          Delete
        </button>
      </div>
    </>
  );
};

export default SnippetCard;
//referenced snippet.js
