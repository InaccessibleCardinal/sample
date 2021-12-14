import React, {ChangeEvent, MouseEvent, useState} from 'react';
import Input from './Input';
import someServiceCall from './someServiceCall';

const userNameInput = 'username-input';
const passwordInput = 'password-input';

export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const {value, id} = ev.target;
    (id === userNameInput) ? setUsername(value) : setPassword(value);
  };

  const handleSubmit = async (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    if (!username || !password) {
      return;
    }
    console.log({username, password});
    const response = await someServiceCall({username, password});
    if (response) {
      setUsername('');
      setPassword('');
    }
  };

  return (
    <form>
      <h1>Some Form</h1>
      <Input 
        id={userNameInput} 
        label={'username'}
        value={username}
        handleChange={handleChange}
      />
      <Input 
        id={passwordInput} 
        label={'password'}
        value={password}
        handleChange={handleChange}
      />
      <button onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

