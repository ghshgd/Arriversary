import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  buttonStyle,
  container,
  fontSize,
  keyboardAwareScrollViewContainer,
  textInputStyle,
} from "../../assets/styles/BeforeLogIn";
import Button from "../../components/beforeLogIn/SignButton";
import EmailInput from "../Atoms/EmailInput";
import PasswordInput from "../../components/beforeLogIn/PasswordInput";
import RegisterFooter from "../../components/beforeLogIn/SignFooter";
import RegisterHeader from "../../components/beforeLogIn/LogInHeader";

export default function LogInScreen({ navigation }) {
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  return (
    <KeyboardAwareScrollView
      style={container}
      contentContainerStyle={keyboardAwareScrollViewContainer}
    >
      <RegisterHeader
        subTitle="Sign in to your account to continue"
        errorMessage=""
      />
      <EmailInput
        style={textInputStyle}
        value={emailValue}
        setValue={setEmailValue}
      />
      <PasswordInput
        style={textInputStyle}
        value={passwordValue}
        setValue={setPasswordValue}
        placeholder="password"
      />
      <SignButton style={buttonStyle} fontSize={fontSize} title="Log in" />
      <RegisterFooter
        text="new User?"
        link="Sign up!"
        onPress={() => {
          navigation.navigate("RegisterScreen");
        }}
      />
    </KeyboardAwareScrollView>
  );
}
