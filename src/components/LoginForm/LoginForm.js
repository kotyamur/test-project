import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/user/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label
        style={{
          display: 'flex',
          marginBottom: '16px',
        }}
      >
        Email
        <input type="email" name="email" />
      </label>
      <label
        style={{
          display: 'flex',
          marginBottom: '16px',
        }}
      >
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
