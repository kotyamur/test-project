import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <p
        style={{
          marginRight: '10px',
        }}
      >
        Welcome, {user.name}
      </p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};
