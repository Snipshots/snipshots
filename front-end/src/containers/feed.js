import React, { Component } from 'react';
import Overview from '../components/overview';
import Post from '../components/post';
import Snippet from '../components/snippet';
import { useSelector, useDispatch } from 'react-redux';
import { navigate } from '../reducers/feedSlice';

const Feed = () => {

  const dispatch = useDispatch();
  const dispatchNav = (component) =>{
    dispatch(navigate(component));
  }

  const currState = useSelector((state) => state.feed.currComponent);
  console.log(currState);

  const render = () => {
    if(currState === 'overview') return <Overview dispatchNav={dispatchNav}/>
    else if (currState === 'post') return <Post dispatchNav={dispatchNav} />
    else if (currState === 'snippet') return <Snippet dispatchNav={dispatchNav}/>
}

  return (
    <div id='feed'>
      {render()}
    </div>
  );
};

export default Feed;
