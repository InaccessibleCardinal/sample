import React, {ChangeEvent} from 'react';

type InputProps = {
  id: string;
  label: string;
  value: string;
  handleChange: (ev: ChangeEvent<HTMLInputElement>) => void
};

export default function Input({id, label, value, handleChange}: InputProps) {
  return (
    <label htmlFor={id}>
      {label}
    <input type="text" id={id} value={value} onChange={handleChange} data-testid={id} />
    </label>
  );
}