import React, { Component } from 'react';

const Post = () => {

  //database accepts code as an array, so passed in value must be turned into an array
  const splitString = string => string.split(',');

  function postToDatabase() {
    const title = document.querySelector('#title').value;
    const tags = splitString(document.querySelector('#tags').value); 
    const code = document.querySelector('#code').value;
    const description = document.querySelector('#description').value;
    const postBody = { title, tags, code, description };
    console.log(title);

   fetch('/', {
    method:"POST",
    body: JSON.stringify(postBody),
    headers: { "Content-Type": "application/json" }
    }).then(
      response => response.json()
    ).then(
      data => {
        console.log(data);
      }
    ).catch(error => {
      console.log(error)
    })
  }
  

  return (
    <div id='posts'>
      <h1>Create a new Snippet!</h1>
      <div className='input-box'>
      <label> Post </label>
        <input  type='text' placeholder='title' id='title'></input>
        <input  type='text' placeholder='tags' id='tags'></input>
        <input  type='text' placeholder='code' id='code'></input>
        <input  type='text' placeholder='description' id='description'></input>
        <button type='submit' onClick={postToDatabase}>Post Something</button>
      </div>
    </div>
  );
};

export default Post;
