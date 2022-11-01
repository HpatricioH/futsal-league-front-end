import { render } from '@testing-library/react';
import Hero from '../../components/Hero/Hero';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Hero/>', () => {
  //test #1
  test('renders without error', async () => {
    render(
      <Router>
        <Hero />
      </Router>
    );
  });
});
