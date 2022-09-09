import { Outlet } from 'react-router-dom';
import { Registration, Container, Link } from './AppBar.styled';

export default function AppBar() {
  return (
    <div>
      <nav>
        <Container>
          <div>
            <Link to="/ContactsPage">Phonebook</Link>
          </div>
          <Registration>
            <Link to="/LoginPage">Login</Link>
            <Link to="/SignUpPage">SignUp</Link>
          </Registration>
        </Container>
      </nav>
      <Outlet />
    </div>
  );
}
