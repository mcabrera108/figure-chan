import {
  passwordHasOneLetter,
  passwordHasOneNumber,
  passwordHasOneSpecialCharacter,
  passwordIsAboveCharCount,
} from "../../../utils/passwordStrengthUtil";

export default function getPasswordStrengthValue(input: string) {
  let value = 0;

  if (passwordIsAboveCharCount(input)) {
    value += 1;
  }
  if (passwordHasOneLetter(input)) {
    value += 1;
  }
  if (passwordHasOneSpecialCharacter(input)) {
    value += 1;
  }
  if (passwordHasOneNumber(input)) {
    value += 1;
  }

  return value;
}
