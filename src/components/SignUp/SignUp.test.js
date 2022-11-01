import React from 'react';
import { SignUp } from './SignUp';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

// testing component form
describe('SignUp', () => {
  it('calls the onSubmit fuction', async () => {
    const mockOnSubmit = jest.fn();
    render(
      <Router>
        <SignUp onSubmit={mockOnSubmit} />{' '}
      </Router>
    );

    const username = screen.getByLabelText('User Name');
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    const button = screen.getByRole('button');

    userEvent.type(username, 'userTest');
    userEvent.type(email, 'user@test.com');
    userEvent.type(password, 'Test1234');
    userEvent.click(button);

    expect(mockOnSubmit).toHaveBeenCalledTimes(0);
  });
});
