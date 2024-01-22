import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import feedSubj from '../src/containers/feed';
import Overview from '../src/components/overview';


//we want to test that post button is actually clicked
describe('switch to post component button', ()=>{
  const {getByText, getByTestId} = render(<Overview />);
  
  const button = getByText('Post Code');
  fireEvent.click(button);
  console.log('butt');
  console.log(button);
})