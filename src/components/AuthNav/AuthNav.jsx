import { Registration, Link } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <Registration>
      <Link to="/LoginPage">Login</Link>
      <Link to="/SignUpPage">SignUp</Link>
    </Registration>
  );
}
