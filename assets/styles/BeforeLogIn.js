import { Dimensions } from "react-native"
import Lengths from "../values/Lengths"

const {width, height} = Dimensions.get('screen')

export const textInputWidth = width * 0.7
export const textInputHeight = height * 0.06
export const fontSize = textInputHeight * 0.4
export const textInputMarginVertical = textInputHeight / 16
export const textInputStyle = {
    borderRadius: 8,
    borderWidth: 1,
    padding: 4,
    fontSize: fontSize,
    marginVertical: textInputMarginVertical,
    height: textInputHeight,
    width: textInputWidth
}
export const buttonStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    height: textInputHeight,
    marginVertical: textInputHeight / 16,
    width: textInputWidth
}
export const container = {
    flex: 1,
    marginTop: Lengths.statusbarHeight,
}
export const keyboardAwareScrollViewContainer = {
    alignItems: 'center',
    justifyContent: 'flex-end',
}