import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const { user } = useAuth();

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
      <button>Logout</button>
    </div>
  );
};
