import { useState } from "react";
import useCharacters from "../hooks/useCharacters";
import PasswordOutput from "./PasswordOutput";
import CheckBox from "./CheckBox";
import CharacterLength from "./CharacterLength";
import StrengthIndicator from "./StrengthIndicator";
import generatePassword from "../utils/generatePassword";

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
      <h3 className="app-caption">Password Generator</h3>
      <PasswordOutput password={currentPassword} />

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
        disabled={possibleChars.length === 0}
        onClick={() =>
          setCurrentPassword(generatePassword(possibleChars, characterLength))
        }>
        GENERATE =
      </button>
      <p>{possibleChars.map((c) => c)}</p>
    </div>
  );
};
export default PasswordGenerator;
