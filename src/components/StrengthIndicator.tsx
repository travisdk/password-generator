import checkPasswordRating from "../utils/checkPasswordRating";
import { useMemo } from "react";

type StrengthIndicatorProps = {
  password: string;
};

const StrengthIndicator = ({ password }: StrengthIndicatorProps) => {
  const { value, id } = useMemo(
    () => checkPasswordRating(password),
    [password]
  );

  const barsOut = useMemo(() => {
    return Array(id + 1).fill(1);
  }, [id]);

  return (
    <div className="strengthindicator">
      <h3>Strength</h3>
      <div className="strengthbars">
        {barsOut.map((bar, idx) => (
          <span className="strengthbar" key={idx}>
            |
          </span>
        ))}
      </div>
      <p className="strengthvalue">{value}</p>
    </div>
  );
};
export default StrengthIndicator;
