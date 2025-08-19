import { SignIn } from '@clerk/clerk-react';

const Login: React.FC = () => {
  return (
    <SignIn
      path="/login"
      routing="path"
      signUpUrl="/signup"
      fallbackRedirectUrl="/dashboard"
    />
  );
};

export default Login;
