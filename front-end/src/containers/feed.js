import React from 'react';
import Overview from '../components/overview';
import Post from '../components/post';
import Snippet from '../components/snippet';
import { useSelector, useDispatch } from 'react-redux';
import { navigate, setSnippetInFeed } from '../reducers/feedSlice';
import { setSnippet } from '../reducers/snippetSlice';

const Feed = () => {
  const dispatch = useDispatch();

  const dispatchNav = (component) => {
    dispatch(navigate(component));
  };

  // update snippet in state and navigate to snippet component
  const setSnippetAndNavigate = (snippet) => {
    dispatch(setSnippet(snippet));
    dispatch(navigate('snippet'));
  };

  // navigate back to overview
  const toOverview = () => {
    //console.log('to overview');
    dispatchNav('overview');
  };

  // keeps track of what component we're currently on
  const currState = useSelector((state) => state.feed.currComponent);

  // render one of our three main components based on current state (default: overview)
  const render = () => {
    if (currState === 'overview') {
      return (
        <Overview
          dispatchNav={dispatchNav}
          setSnippetAndNavigate={setSnippetAndNavigate}
        />
      ); // pass in both navigator functions to get to either the post or snippet component
    } else if (currState === 'post') {
      return <Post dispatchNav={dispatchNav} toOverview={toOverview} />; // pass in the navigator function to navigate back to overview
    } else if (currState === 'snippet') {
      return <Snippet dispatchNav={dispatchNav} toOverview={toOverview} />; // pass in the navigator function to navigate back to overview
    }
  };

  return <div id="feed">{render()}</div>;
};

export default Feed;
