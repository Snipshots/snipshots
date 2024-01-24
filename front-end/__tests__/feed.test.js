import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import feedSubj from '../src/containers/feed';
import Overview from '../src/components/overview';

//we want to test that post button is actually clicked
describe('switch to post component button', () => {
  const { getByText, getByTestId } = render(<Overview />);

  const button = getByText('Post new Snippet!');

  test('check if button is clicked', async () => {
    await render(button);
    await userEvent.click(button);
  });
});

// describe('Unit testing React components', () => {
//   describe('LabeledText', () => {
//     let text;
//     const props = {
//       label: 'Mega',
//       text: 'Markets',
//     };

//     beforeAll(() => {
//       text = render(<LabeledText {...props} />);
//     });

//     test('Renders the passed-in text with the label in bold', () => {
//       expect(text.getByText('Mega:').nextSibling).toHaveTextContent('Markets');
//       expect(text.getByText('Mega:')).toHaveStyle('font-weight: bold');
//     });
//   });

//   describe('Market', () => {
//     const props = {
//       index: 253,
//       location: 'Belarus',
//       cards: 37,
//       percentage: '80.00',
//     };

//     // TODO: Test the following:
//     // 1. A Market should display an ID, location, number of cards, percent of total
//     // 2. It should also contain two buttons for adding and removing markets
//     // 3. The functions passed down should be invoked on click
//     // 4. The percentage should be a string calculated to two decimals.
//     // Test for zero, a whole number, and a fractional value. (Right now this
//     // is implemented incorrectly, so follow TDD here)
//   });
// });

// import React from 'react'; // changed 'React' to 'react'
// import { Provider } from 'react-redux';
// import userEvent from '@testing-library/user-event';
// import { render, screen, waitFor } from '@testing-library/react';
// import regeneratorRuntime from 'regenerator-runtime';

// import App from '../client/App';
// import LabeledText from '../client/components/LabeledText';
// import Market from '../client/components/Market';
// import store from '../client/store';

// describe('Unit testing React components', () => {
//   describe('LabeledText', () => {
//     let text;
//     const props = {
//       label: 'Mega',
//       text: 'Markets',
//     };

//     beforeAll(() => {
//       text = render(<LabeledText {...props} />); // <LabeledText label='Mega' text='Markets' />
//       // console.log('text Object: ', text);
//     });

//     test('Renders the passed-in text with the label in bold', () => {
//       expect(text.getByText('Mega:').nextSibling).toHaveTextContent('Markets');
//       expect(text.getByText('Mega:')).toHaveStyle('font-weight: bold');
//     });
//   });

//   describe('Market', () => {
//     const props = {
//       index: 253,
//       location: 'Belarus',
//       cards: 37,
//       percentage: '80.00',
//       addCard: jest.fn(), // added
//       deleteCard: jest.fn(), // added
//     };

//     // TODO: Test the following:
//     // 1. A Market should display an ID, location, number of cards, percent of total
//     // 2. It should also contain two buttons for adding and removing markets
//     // 3. The functions passed down should be invoked on click
//     // 4. The percentage should be a string calculated to two decimals.
//     // Test for zero, a whole number, and a fractional value. (Right now this
//     // is implemented incorrectly, so follow TDD here)
//     let utils;

//     // We added userEvent.setup based on documentation's recommendation

//     beforeEach(() => {
//       utils = render(<Market {...props} />); // <Market index=253, location='Belarus' cards=37 percentage='80.00' />
//       // console.log('text Object: ', text);
//     });

//     test('strings exist in Market', () => {
//       // #1
//       expect(utils.getByText('Market ID:').nextSibling).toHaveTextContent(
//         '253'
//       );
//       expect(utils.getByText('Market ID:')).toHaveStyle('font-weight: bold');
//       expect(utils.getByText('Location:').nextSibling).toHaveTextContent(
//         'Belarus'
//       );
//       expect(utils.getByText('Location:')).toHaveStyle('font-weight: bold');
//       expect(utils.getByText('Cards:').nextSibling).toHaveTextContent('37');
//       expect(utils.getByText('Cards:')).toHaveStyle('font-weight: bold');
//       expect(utils.getByText('% of total:').nextSibling).toHaveTextContent(
//         '80.00'
//       );
//       expect(utils.getByText('% of total:')).toHaveStyle('font-weight: bold');
//     });

//     // #2
//     test('+ and - buttons exist', () => {
//       expect(utils.getByText('+')).toBeInTheDocument(); // changed
//       expect(utils.getByText('-')).toBeInTheDocument(); // changed
//     });

//     // #3
//     test('+ and - buttons function properly', () => {
//       // utils.debug();
//       expect(props.addCard).toHaveBeenCalledTimes(0);
//       userEvent.click(utils.getByText('+'));
//       expect(props.addCard).toHaveBeenCalledTimes(1);

//       expect(props.deleteCard).toHaveBeenCalledTimes(0);
//       userEvent.click(utils.getByText('-'));
//       expect(props.deleteCard).toHaveBeenCalledTimes(1);
//     });
//   });
// });

// describe('React-Redux integration tests', () => {
//   describe('Empty state before interactions', () => {
//     beforeEach(async () => {
//       const app = await render(
//         <Provider store={store}>
//           <App />
//         </Provider>
//       );
//     });
