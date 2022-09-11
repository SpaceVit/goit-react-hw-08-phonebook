import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { SignUpForm, Label, Input, Button } from './SignUpPage.styled';

export default function SignUpPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const hendleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <SignUpForm onSubmit={hendleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        E-mail
        <Input
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Sign Up</Button>
    </SignUpForm>
  );
}
