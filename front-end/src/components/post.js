// import React, { Component } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPost, clearPost } from '../reducers/postSlice';
//importing usedispatch, useselector, setpost, clearpost to implement redux

const Post = ({ toOverview }) => {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.post);
  console.log(postData);
  //useselector passing in the post slice of state

  // database accepts code as an array, so passed in value must be turned into an array.
  // also added trimming and turning tags to lowercase
  const splitString = (string) =>
    string.split(',').map((tag) => tag.trim().toLowerCase());

  function postToDatabase() {
    console.log('post: ', postData);
    const { title, tags, code, description } = postData;
    //console.log(postData);
    const postBody = {
      title: title,
      tags: splitString(tags),
      code: code,
      description: description,
    };
    console.log('post data: ', postData);

    //destructuring postData and then reassigning value of tags to be the split version

    fetch('/', {
      method: 'POST',
      body: JSON.stringify(postBody),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(clearPost());
        //using clearpost to reset post state, rather than manually resetting via vanilla DOM manip
        alert('Snippet has been saved!');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //creating function to handle the setpost event in jsx code below
  const handlePostChange = (event) => {
    console.log('target: ', event.target);
    const { name, value } = event.target;
    dispatch(setPost({ field: name, value }));
  };

  return (
    <div id="post">
      <button onClick={toOverview} className="back">
        {'←'}
      </button>
      <h1>Create a new Snippet!</h1>
      <form className="input-box" onSubmit={postToDatabase}>
        <label>Title:</label>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={postData.title}
          onChange={handlePostChange}
        />
        <textarea
          placeholder="code"
          name="code"
          value={postData.code}
          onChange={handlePostChange}
        />
        <label>Tags:</label>
        <input
          type="text"
          placeholder="tags"
          name="tags"
          value={postData.tags}
          onChange={handlePostChange}
        />
        <label>Description:</label>
        <textarea
          placeholder="description"
          name="description"
          value={postData.description}
          onChange={handlePostChange}
        />
        <button id="postcode" type="submit" onClick={postToDatabase}>
          Submit snippet!
        </button>
      </form>
    </div>
  );
};

export default Post;
