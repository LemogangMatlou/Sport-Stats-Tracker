import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      {/* If signed in */}
      <SignedIn>
        <h1>Football Stats Tracker</h1>
        <p>Welcome! You can start tracking your football stats here.</p>

        {/* Clerk provides a UserButton with logout */}
        <UserButton/>

        <div style={{ marginTop: "2rem" }}>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              cursor: "pointer",
              borderRadius: "8px",
              border: "none",
              background: "#2563eb",
              color: "#fff",
            }}
          >
            Start Tracking
          </button>
        </div>
      </SignedIn>

      {/* If not signed in */}
      <SignedOut>
        <h2>You are not signed in.</h2>
        <Link to="/login">Go to Login</Link>
      </SignedOut>
    </section>
  );
};

export default Dashboard;
