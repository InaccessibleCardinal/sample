import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react';
import Form from './Form';
import someServiceCall from './someServiceCall';

jest.mock('./someServiceCall', () => {
  return {
    __esModule: true,
    default: jest.fn()
  }
});

describe('Form component', () => {
  it('should render', () => {
    render(<Form />);
    const usernameInput = screen.getByTestId('username-input');
    const passwordInput = screen.getByTestId('password-input');
    fireEvent.change(usernameInput, {target: {value: 'testname'}});
    fireEvent.change(passwordInput, {target: {value: 'testpass'}});
    fireEvent.click(screen.getByText(/submit/i));
    expect(someServiceCall).toHaveBeenCalledWith({
      username: 'testname',
      password: 'testpass'
    });
  });
});