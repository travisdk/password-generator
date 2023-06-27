import "../css/CheckBox.css";

type CheckBoxProps = {
  name: string;
  charRangeSelector: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox = ({ name, charRangeSelector, handleChange }: CheckBoxProps) => {
  return (
    <div className="checkbox-and-label">
      <input
        className="custom-checkbox"
        type="checkbox"
        id={name}
        checked={charRangeSelector}
        onChange={handleChange}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};
export default CheckBox;
