import React, { useState } from 'react';

const Post = ({ toOverview }) => {
  //setting up state for postData
  const [postData, setPostData] = useState({
    title: '',
    tags: '',
    code: '',
    description: '',
  });

  // database accepts code as an array, so passed in value must be turned into an array.
  // also added trimming and turning tags to lowercase
  const splitString = (string) =>
    string.split(',').map((tag) => tag.trim().toLowerCase());

  function postToDatabase() {
    console.log('post: ', postData);
    const { title, tags, code, description } = postData;
    const postBody = {
      title: title,
      tags: splitString(tags),
      code: code,
      description: description,
    };
    console.log('post data: ', postData);

    fetch('/', {
      method: 'POST',
      body: JSON.stringify(postBody),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //resetting state using setter function
        setPostData({
          title: '',
          tags: '',
          code: '',
          description: '',
        });
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
    //using setter function to assign the state
    setPostData({ ...postData, [name]: value });
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
        <button id="postcode" type="submit">
          Submit snippet!
        </button>
      </form>
    </div>
  );
};

export default Post;
