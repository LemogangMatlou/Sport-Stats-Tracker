import { SignUp } from '@clerk/clerk-react';

const Signup: React.FC = () => {
  return <SignUp path="/signup" routing="path" signInUrl="/login" />;
};

export default Signup;
