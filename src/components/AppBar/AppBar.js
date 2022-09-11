import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { Container, Link } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <div>
      <nav>
        <Container>
          <div>
            <Link to="/ContactsPage">Phonebook</Link>
          </div>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Container>
      </nav>
      <Outlet />
    </div>
  );
}
