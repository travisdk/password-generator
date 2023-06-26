const generatePassword = (
  possibleChars: Array<string> | null,
  charLength: number
): string => {
  if (!possibleChars || charLength < 1) {
    throw new Error("Cannot generate password due to invalid input!");
  }
  let password = "";
  const maxPosition = possibleChars.length - 1;
  for (let i = 0; i < charLength; i++) {
    const charPos = getRandomInt(maxPosition);
    password += possibleChars[charPos];
  }
  return password;
};
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
export default generatePassword;
