import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { LoginForm, Label, Input, Button } from './LoginPage.styled';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hendleChange = e => {
    const { name, value } = e.target;
    switch (name) {
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
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <LoginForm onSubmit={hendleSubmit}>
      <Label>
        E-mail
        <Input
          type="email"
          name="email"
          required
          value={email}
          onChange={hendleChange}
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          required
          value={password}
          onChange={hendleChange}
        />
      </Label>
      <Button type="submit">Log In</Button>
    </LoginForm>
  );
}
