import { useState } from "react";
import useCharacters from "../hooks/useCharacters";
import PasswordOutput from "./PasswordOutput";
import CheckBox from "./CheckBox";
import CharacterLength from "./CharacterLength";
import StrengthIndicator from "./StrengthIndicator";
import generatePassword from "../utils/generatePassword";
import "../css/PasswordGenerator.css";
const PasswordGenerator = () => {
  const [characterLength, setCharacterLength] = useState(4);
  const [currentPassword, setCurrentPassword] = useState("");
  const {
    enableLowerCaseLetters,
    enableUpperCaseLetters,
    enableNumerics,
    enableSymbols,
    setEnableLowerCaseLetters,
    setEnableUpperCaseLetters,
    setEnableNumerics,
    setEnableSymbols,
    possibleChars,
  } = useCharacters();

  return (
    <div className="password-generator-container">
      <h3 className="password-generator-caption">Password Generator</h3>
      <PasswordOutput password={currentPassword} />
      <div className="pg-lower-container">
        <CharacterLength
          characterLength={characterLength}
          handleChange={(e) => setCharacterLength(parseInt(e.target.value))}
        />
        <CheckBox
          name="Include Uppercase Letters"
          charRangeSelector={enableUpperCaseLetters}
          handleChange={(e) => setEnableUpperCaseLetters((prev) => !prev)}
        />
        <CheckBox
          name="Include Lowercase Letters"
          charRangeSelector={enableLowerCaseLetters}
          handleChange={(e) => setEnableLowerCaseLetters((prev) => !prev)}
        />
        <CheckBox
          name="Include Number"
          charRangeSelector={enableNumerics}
          handleChange={(e) => setEnableNumerics((prev) => !prev)}
        />
        <CheckBox
          name="Include Symbols"
          charRangeSelector={enableSymbols}
          handleChange={(e) => setEnableSymbols((prev) => !prev)}
        />
        <StrengthIndicator password={currentPassword} />
        <button
          className="password-generate-button"
          disabled={possibleChars.length === 0}
          onClick={() =>
            setCurrentPassword(generatePassword(possibleChars, characterLength))
          }>
          GENERATE
          <span className="arrow">
            <svg
              width="11.105347px"
              height="12px"
              viewBox="0 0 11.105347 12"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.99994 0L0 5.99998L5.99994 12L7.26496 10.735L3.42447 6.89453L11.1054 6.89453L11.1054 5.1054L3.42447 5.1054L7.26496 1.26495L5.99994 0L5.99994 0Z"
                id="Shape"
                stroke="none"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};
export default PasswordGenerator;
