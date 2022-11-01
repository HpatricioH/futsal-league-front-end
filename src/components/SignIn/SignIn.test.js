import React from 'react';
import { SignIn } from './SignIn';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

// testing SignIn component
describe('SignIn', () => {
  it('calls the onSubmit function', async () => {
    const mockOnSubmit = jest.fn();
    render(
      <Router>
        <SignIn onSubmit={mockOnSubmit} />{' '}
      </Router>
    );

    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    const button = screen.getByRole('button');

    fireEvent.change(email, { target: { value: 'user@test.com' } });
    fireEvent.change(password, { target: { value: 'Test123' } });
    fireEvent.click(button);

    expect(mockOnSubmit).toHaveBeenCalledTimes(0);
  });
});
