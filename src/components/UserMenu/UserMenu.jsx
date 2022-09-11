import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { Button } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.gteUsername);

  return (
    <div>
      <span>
        Hi, <b>{name}</b>
      </span>
      <Button type="button" onClick={() => dispatch(authOperations.logout())}>
        LogOut
      </Button>
    </div>
  );
}
