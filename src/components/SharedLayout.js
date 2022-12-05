import { Outlet, NavLink } from 'react-router-dom';
import { Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </header>
      <Outlet />
    </Container>
  );
};
