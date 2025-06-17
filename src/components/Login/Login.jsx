import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { GithubAuthProvider } from "firebase/auth";

// displayName: "Rubait Reshad"
// email: "rubaitreshad@gmail.com"
// emailVerified: true
// isAnonymous: false
// metadata: UserMetadata {createdAt: '1750159330557', lastLoginAt: '1750160058183', lastSignInTime: 'Tue, 17 Jun 2025 11:34:18 GMT', creationTime: 'Tue, 17 Jun 2025 11:22:10 GMT'}
// photoURL: "https://lh3.googleusercontent.com/a/ACg8ocLiu-qzQD6fMOi4SPNs2VzRatC5R9OPMA6hQQGSNmfxz8DfiDGL=s96-c"

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const providerGitHub = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out Completed");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, providerGitHub)
      .then((result) => {
        console.log(result.user);
        const loggedInUser = result.user;

        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Please Login</h2>

      {user ? (
        <button onClick={() => handleSignOut()}>Sign Out</button>
      ) : (
        <>
          <button onClick={() => handleGoogleSignIn()}>
            Sign in With Google
          </button>

          <button onClick={() => handleGitHubSignIn()}>
            Sign in With GitHub
          </button>
        </>
      )}
      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
