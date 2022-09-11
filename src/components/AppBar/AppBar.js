import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { Container, Link } from './AppBar.styled';
import { AiOutlineHome } from 'react-icons/ai';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div>
      <nav>
        <Container>
          <div>
            <Link to="/">
              <AiOutlineHome />
            </Link>
            <Link to="/ContactsPage">Phonebook</Link>
          </div>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Container>
      </nav>
      <Outlet />
    </div>
  );
}
