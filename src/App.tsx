import React, { useEffect, useRef } from "react";
import "./App.css";
import AuthApi from "./app/utilities/api/auth";
import Amplify, { Auth, API } from "aws-amplify";
import { Config } from "./environments/config";
import ReactQrLibReader from "./app/components/ReactQRReader";
import ReactQrScanner from "./app/components/ReactQrScanner";
import { Navigate, Route, Routes } from "react-router-dom";
import Menu from "./app/components/pages/Menu";
import Login from "./app/components/pages/Login";

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
      {/*
        <Route path="/" element={<Menu />}>

          <Route path="login" element={<Login />} />


          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>
      </Routes>
   */}
      {/*<ReactQrScanner />
        <button onClick={onFirstTimeSignUp}>First Signup</button>
        <button onClick={handleChangePassword}>Set First Time Password</button>
        <button onClick={currentUser}>Current User</button>
        <button onClick={logout}>Logout</button>
        <button onClick={logout}>Forgotpassword</button>
        <button onClick={rememberDevice}>Remember</button>
        <button onClick={forgotDevice}>Forgot Device</button>
  */}
    </div>
  );
}
//npx serve -s build
export default App;
