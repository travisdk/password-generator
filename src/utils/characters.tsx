const characters = (): {
  lowerCaseLetters: Array<string>;
  upperCaseLetters: Array<string>;
  numerics: Array<string>;
  symbols: Array<string>;
} => {
  const lowerCaseLetters: Array<string> = [];
  for (let i = 97; i < 123; i++) {
    lowerCaseLetters.push(String.fromCharCode(i));
  }

  const upperCaseLetters: Array<string> = [];
  for (let i = 65; i < 91; i++) {
    upperCaseLetters.push(String.fromCharCode(i));
  }

  const numerics: Array<string> = [];
  for (let i = 48; i < 58; i++) {
    numerics.push(String.fromCharCode(i));
  }
  const symbols: Array<string> = [];
  for (let i = 33; i < 48; i++) {
    symbols.push(String.fromCharCode(i));
  }
  for (let i = 58; i < 65; i++) {
    symbols.push(String.fromCharCode(i));
  }
  for (let i = 91; i < 97; i++) {
    symbols.push(String.fromCharCode(i));
  }
  for (let i = 123; i < 127; i++) {
    symbols.push(String.fromCharCode(i));
  }
  return { lowerCaseLetters, upperCaseLetters, numerics, symbols };
};
// US-ASCII characters used....
export default characters;
