import { Amplify, Auth } from "aws-amplify";

class AuthApi {
  constructor() {}

  async fistTimeSignUp() {
    try {
      const res = await Auth.signIn("+940768407950", "Tharun123");
      console.log(res);
      return res;
    } catch (ex) {
      console.log(ex);
      return false;
    }
  }

  async forgotPassword(username: string) {
    try {
      const res = await Auth.forgotPassword(username);
      console.log(res);
      return res;
    } catch (ex) {
      console.log(ex);
      return false;
    }
  }

  async setFirstTimePassword(user: any) {
    try {
      const res = await Auth.completeNewPassword(user, "Tharun123");
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  }

  async currentUser() {
    try {
      const res = await Auth.currentUserInfo();
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  }

  async rememberDevice() {
    try {
      const result = await Auth.rememberDevice();
      console.log(result);
    } catch (ex) {
      console.log(ex);
    }
  }

  async forgotDevice() {
    try {
      const result = await Auth.forgetDevice();
      console.log(result);
    } catch (ex) {
      console.log(ex);
    }
  }

  async signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  async reinvite(username: string) {
    try {
      const result = Auth.resendSignUp(username);
      console.log(result);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  async signIn() {}
}
export default AuthApi;
