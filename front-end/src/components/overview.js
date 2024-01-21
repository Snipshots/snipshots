import React, { Component } from 'react';

const Overview = ({dispatchNav}) => {
  function posted () {
    dispatchNav('post');
  }

  return (
    <div id='overview'>
      <h1>Your Snippets</h1>
      <button onClick={posted}>Post Code</button>
    </div>
  );
};

export default Overview;
