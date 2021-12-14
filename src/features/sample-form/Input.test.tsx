import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react';
import Input from './Input';

const mockHandleChange = jest.fn();

describe('Input component', () => {
  it('should render', () => {
    const props = {
      id: 'test1', 
      label: 'test1', 
      value: '', 
      handleChange: mockHandleChange
    };
    render(<Input {...props} />);
    const label = screen.getByText(/test1/i);
    expect(label).toBeInTheDocument();
    fireEvent.change(screen.getByTestId('test1'), {target: {value: 'x'}});
    expect(mockHandleChange).toHaveBeenCalled();
  });
});