import React from "react";

type CharacterLengthProps = {
  characterLength: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CharacterLength = ({
  characterLength,
  handleChange,
}: CharacterLengthProps) => {
  return (
    <div className="characterlength">
      <div className="characterlength-output">
        <h3 className="characterlength-caption">Character Length</h3>
        <h2 className="characterlength-value">{characterLength}</h2>
      </div>
      <input
        type="range"
        min="1"
        max="20"
        value={characterLength}
        onChange={handleChange}
      />
    </div>
  );
};
export default CharacterLength;
