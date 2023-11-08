import {TextInput} from 'react-native';

export default function Input({
  value,
  setValue,
  style,
  inputType,
  placeholder,
  errorMsg,
  multiline,
}) {
  fetch;
  const keyboardType = inputType === 'email' ? 'email-address' : 'default';
  const textContentType =
    inputType === 'email'
      ? 'emailAddress'
      : inputType === 'password'
      ? 'password'
      : 'none';
  const ph = placeholder
    ? placeholder
    : inputType === 'email'
    ? 'Email'
    : inputType === 'password'
    ? 'Password'
    : inputType === 'description'
    ? 'Description'
    : '입력하세요...';

  return (
    <TextInput
      onChangeText={text => {
        try {
          setValue(text);
        } catch (err) {
          console.error(errorMsg + err);
        }
      }}
      style={style}
      value={value}
      multiline={multiline}
      autoCapitalize="none"
      keyboardType={keyboardType}
      textContentType={textContentType}
      placeholder={ph}
    />
  );
}
