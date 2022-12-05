import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
export const AppBar = () => {
  return (
    <header
      style={{
        display: 'flex',
        padding: '0 16px',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
        borderBottom: '1px solid #2a363b',
      }}
    >
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
};
