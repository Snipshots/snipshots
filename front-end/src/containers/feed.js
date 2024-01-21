import React, { Component } from 'react';
import Overview from '../components/overview';
import Post from '../components/post';
import Snippet from '../components/snippet';
import { useSelector, useDispatch } from 'react-redux';
import { navigate } from '../reducers/feedSlice';

const Feed = () => {

  const dispatch = useDispatch();
  //dispatch proper comopoentn to navigate reducer
  const dispatchNav = (component) =>{
    dispatch(navigate(component));
  }

  //function that dispatches component to navigation reducer in feedSlice
  const toOverview = () => {
    console.log('to overview')
    dispatchNav('overview');
  }

  const currState = useSelector((state) => state.feed.currComponent);
  console.log(currState);

  const render = () => {
    if(currState === 'overview') return <Overview dispatchNav={dispatchNav} />
    else if (currState === 'post') return <Post dispatchNav={dispatchNav} toOverview={toOverview} />
    else if (currState === 'snippet') return <Snippet dispatchNav={dispatchNav} toOverview={toOverview}  />
}

  return (
    <div id='feed'>
      {render()}
    </div>
  );
};

export default Feed;
