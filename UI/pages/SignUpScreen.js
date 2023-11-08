import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  buttonStyle,
  container,
  fontSize,
  keyboardAwareScrollViewContainer,
  textInputStyle,
} from "../../assets/styles/BeforeLogIn";
import EmailInput from "../Atoms/EmailInput";
import PasswordInput from "../../components/beforeLogIn/PasswordInput";
import RegisterFooter from "../../components/beforeLogIn/SignFooter";
import RegisterHeader from "../../components/beforeLogIn/LogInHeader";
import Button from "../../components/beforeLogIn/SignButton";

export default function SignUpScreen({ navigation }) {
  const [confirmPasswordValue, setConfirmPasswordValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const [idToken, setIdToken] = React.useState("");

  async function onRegisterHandler() {
    const res = await signUp("ghshgd1fS2@gmail.com", "123456");
    setIdToken(res.data.idToken);
  }

  return (
    <KeyboardAwareScrollView
      style={container}
      contentContainerStyle={keyboardAwareScrollViewContainer}
    >
      <RegisterHeader subTitle="create account to get started" />
      {/* email */}
      <EmailInput
        value={emailValue}
        setValue={setEmailValue}
        style={textInputStyle}
      />
      {/* password */}
      <PasswordInput
        value={passwordValue}
        setValue={setPasswordValue}
        style={textInputStyle}
        placeholder="Password"
      />
      {/* confirmPassword */}
      <PasswordInput
        value={confirmPasswordValue}
        setValue={setConfirmPasswordValue}
        style={textInputStyle}
        placeholder="confirmPassword"
      />
      {/* Sign up Button */}
      <Button
        onPress={onRegisterHandler}
        style={buttonStyle}
        fontSize={fontSize}
        title="Sign up"
      />
      {/* delete below code */}
      <Pressable
        onPress={() => {
          verificateEmail();
        }}
        style={buttonStyle}
      >
        <Text style={{ fontSize }}>verification</Text>
      </Pressable>
      {/* footer */}
      <RegisterFooter
        text="Do you have an account?"
        link="Sign in"
        onPress={() => {
          navigation.navigate("LogInScreen");
        }}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({});
