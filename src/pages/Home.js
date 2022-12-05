export const Home = () => {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 50px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          fontWeight: 500,
          fontSize: 48,
          textAlign: 'center',
        }}
      >
        Welcome to your Phonebook
      </h1>
    </div>
  );
};
