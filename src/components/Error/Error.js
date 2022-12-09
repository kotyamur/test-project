import { ErrorText } from './Error.styled';

export const ErrorMessage = ({ children }) => {
  return (
    <>
      <ErrorText>{children}</ErrorText>
    </>
  );
};
