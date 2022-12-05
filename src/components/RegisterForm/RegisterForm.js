export const RegisterForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
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
        Username
        <input type="text" name="name" />
      </label>
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
      <button type="submit">Sign Up</button>
    </form>
  );
};
