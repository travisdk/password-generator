import React, { useMemo } from "react";
import "../css/CharacterLength.css";
type CharacterLengthProps = {
  characterLength: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CharacterLength = ({
  characterLength,
  handleChange,
}: CharacterLengthProps) => {
  const progressPCT = useMemo(() => {
    // webkit "hack" for progress part of the slider...
    const pct = ((100 / 19) * (characterLength - 1)).toString() + "%";
    return pct;
    // "hack" end
  }, [characterLength]);
  return (
    <div className="characterlength">
      <div className="characterlength-output">
        <h3 className="characterlength-caption">Character Length</h3>
        <h2 className="characterlength-value">{characterLength}</h2>
      </div>
      <input
        className="characterlength-slider"
        type="range"
        role="slider"
        min="1"
        max="20"
        aria-valuemin={1}
        aria-valuemax={20}
        aria-value={characterLength}
        value={characterLength}
        style={{ "--PROGRESS_PCT": progressPCT } as React.CSSProperties}
        onChange={handleChange}
      />
    </div>
  );
};
export default CharacterLength;
