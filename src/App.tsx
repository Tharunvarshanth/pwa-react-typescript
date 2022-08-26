import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import AuthApi from "./app/utilities/api/auth";
import Amplify, { Auth, API } from "aws-amplify";
import AmazonCognitoIdentity from "amazon-cognito-identity-js";
import AWS, { CognitoIdentityServiceProvider } from "aws-sdk";
import { Config } from "./environments/config";

Amplify.configure({
  aws_cognito_region: "ap-south-1",
  aws_user_pools_id: "ap-south-1_aOUQu6r4O",
  aws_user_pools_web_client_id: "244p26jusn0eum5i5f9l1gdjg8",
});

function App() {
  const authController = useRef(new AuthApi());
  let userSession: any;

  useEffect(() => {
    console.log(Config.env);
    /*
    Auth.currentSession().then((res) => {
      let accessToken = res.getAccessToken();
      let jwt = accessToken.getJwtToken();
      // console.log(`myAccessToken: ${JSON.stringify(accessToken)}`);
    });*/
    return () => {};
  }, []);

  async function onFirstTimeSignUp() {
    userSession = await authController.current.fistTimeSignUp();
  }

  function handleChangePassword() {
    console.log(userSession);
    if (userSession.challengeName === "NEW_PASSWORD_REQUIRED") {
      authController.current.setFirstTimePassword(userSession);
    }
  }

  function currentUser() {
    authController.current.currentUser();
  }

  async function logout() {
    await authController.current.signOut();
  }
  async function rememberDevice() {
    authController.current.rememberDevice();
  }
  async function forgotDevice() {
    authController.current.forgotDevice();
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Tharun PWA App</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <button onClick={onFirstTimeSignUp}>First Signup</button>
        <button onClick={handleChangePassword}>Set First Time Password</button>
        <button onClick={currentUser}>Current User</button>
        <button onClick={logout}>Logout</button>
        <button onClick={logout}>Forgotpassword</button>
        <button onClick={rememberDevice}>Remember</button>
        <button onClick={forgotDevice}>Forgot Device</button>
      </header>
    </div>
  );
}
//npx serve -s build
export default App;
