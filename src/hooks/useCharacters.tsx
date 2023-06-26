import characters from "../utils/characters";
import { useState, useMemo } from "react";

export default function useCharacters() {
  const charRanges = characters();
  const [enableLowerCaseLetters, setEnableLowerCaseLetters] = useState(true);
  const [enableUpperCaseLetters, setEnableUpperCaseLetters] = useState(true);
  const [enableNumerics, setEnableNumerics] = useState(true);
  const [enableSymbols, setEnableSymbols] = useState(true);

  const possibleChars: Array<string> = useMemo(() => {
    let possibles: Array<string> = [];
    if (enableLowerCaseLetters) {
      possibles = [...charRanges.lowerCaseLetters];
    }
    if (enableUpperCaseLetters) {
      possibles = [...possibles, ...charRanges.upperCaseLetters];
    }
    if (enableNumerics) {
      possibles = [...possibles, ...charRanges.numerics];
    }
    if (enableSymbols) {
      possibles = [...possibles, ...charRanges.symbols];
    }
    return possibles;
  }, [
    enableLowerCaseLetters,
    enableUpperCaseLetters,
    enableNumerics,
    enableSymbols,
    charRanges,
  ]);

  return {
    enableLowerCaseLetters,
    enableUpperCaseLetters,
    enableNumerics,
    enableSymbols,
    setEnableLowerCaseLetters,
    setEnableUpperCaseLetters,
    setEnableNumerics,
    setEnableSymbols,
    possibleChars,
  };
}
