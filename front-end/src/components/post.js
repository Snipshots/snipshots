import React, { Component } from 'react';

const Post = ({toOverview}) => {
  // database accepts code as an array, so passed in value must be turned into an array.
  // also added trimming and turning tags to lowercase
  const splitString = string => string.split(',').map(tag => tag.trim().toLowerCase());

  function postToDatabase() {
    const titleInput = document.querySelector('#title');
    const title = titleInput.value;
    const tagsInput = document.querySelector('#tags'); 
    const tags = splitString(tagsInput.value);
    const codeInput = document.querySelector('#code');
    const code = codeInput.value;
    const descriptionInput = document.querySelector('#description');
    const description = descriptionInput.value;
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
        titleInput.value = '';
        tagsInput.value = '';
        codeInput.value = '';
        descriptionInput.value = '';
        alert('Snippet has been saved!')
      }
    ).catch(error => {
      console.log(error)
    })
  }

  return (
    <div id='post'>
      <button onClick={toOverview} className='back'>{'←'}</button>
      <h1>Create a new Snippet!</h1>
      <div className='input-box'>
        <label>Title:</label>
        <input type='text' placeholder='title' id='title'></input>
        <textarea placeholder='code' id='code'></textarea>
        <label>Tags:</label>
        <input type='text' placeholder='tags' id='tags'></input>
        <label>Description:</label>
        <textarea placeholder='description' id='description'></textarea>
        <button id='postcode' type='submit' onClick={postToDatabase}>Submit snippet!</button>
      </div>
    </div>
  );
};

export default Post;
