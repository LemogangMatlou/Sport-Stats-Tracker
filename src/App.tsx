import { Routes, Route } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn, SignIn, SignUp } from '@clerk/clerk-react';

import LandingPage from './pages/landingPage';
import Dashboard from './pages/dashboard';

const App: React.FC = () => {
  return (
    <Routes>
      {/* Public Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Login Page with SSO callback handling */}
      <Route
        path="/login/*"
        element={
          <SignIn
            path="/login"
            routing="path"
            signUpUrl="/signup"
            fallbackRedirectUrl="/dashboard" // Redirect after sign-in
          />
        }
      />

      {/* Signup Page */}
      <Route
        path="/signup"
        element={
          <SignUp
            path="/signup"
            routing="path"
            signInUrl="/login"
            fallbackRedirectUrl="/dashboard" // Redirect after signup & verification
          />
        }
      />
      
      {/* Protected Dashboard */}
      <Route
        path="/dashboard"
        element={
          <SignedIn>
            <Dashboard />
          </SignedIn>
        }
      />
      <Route
        path="/dashboard"
        element={
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        }
      />
    </Routes>

    
  );
};

export default App;
