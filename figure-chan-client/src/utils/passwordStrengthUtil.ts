export function passwordIsAboveCharCount(input: string) {
  return input.length >= 8;
}
export function passwordHasOneLetter(input: string) {
  return /[A-Za-z]/.test(input);
}
export function passwordHasOneSpecialCharacter(input: string) {
  return /[^a-zA-Z0-9]/.test(input);
}
export function passwordHasOneNumber(input: string) {
  return /[0-9]/.test(input);
}
export function passwordValidator(input: string) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).*$/.test(input);
}
