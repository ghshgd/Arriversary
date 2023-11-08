import { GoogleSignin } from "@react-native-google-signin/google-signin";
import googleSigninConfig from "./googleSigninConfig";

export const googleSigninConfigure = async () => {
  await GoogleSignin.configure(googleSigninConfig);
  console.log(`hiGoogle Signin!`);
};
