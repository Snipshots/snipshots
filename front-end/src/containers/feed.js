import React from 'react';
import Overview from '../components/overview';
import Post from '../components/post';
import Snippet from '../components/snippet';
import { useSelector, useDispatch } from 'react-redux';
import { navigate, setSnippetInFeed } from '../reducers/feedSlice';
import { setSnippet } from '../reducers/snippetSlice';

const Feed = () => {
  const dispatch = useDispatch();

  const dispatchNav = (component) =>{
    dispatch(navigate(component));
  }

  const setSnippetAndNavigate = (snippet) => {
    dispatch(setSnippet(snippet));
    dispatch(navigate('snippet'));    
  };

  const toOverview = () => {
    console.log('to overview')
    dispatchNav('overview');
  }

  const currState = useSelector((state) => state.feed.currComponent);

  const render = () => {
    if(currState === 'overview') {
      return <Overview dispatchNav={dispatchNav} setSnippetAndNavigate={setSnippetAndNavigate} /> // Pass setSnippetAndNavigate
    } else if (currState === 'post') {
      return <Post dispatchNav={dispatchNav} toOverview={toOverview} />
    } else if (currState === 'snippet') {
      return <Snippet dispatchNav={dispatchNav} toOverview={toOverview}  />
    }
  }

  return (
    <div id='feed'>
      {render()}
    </div>
  );
};

export default Feed;
