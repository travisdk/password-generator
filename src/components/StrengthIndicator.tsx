import checkPasswordRating from "../utils/checkPasswordRating";
import { useMemo } from "react";
import "../css/StrengthIndicator.css";
type StrengthIndicatorProps = {
  password: string;
};

const StrengthIndicator = ({ password }: StrengthIndicatorProps) => {
  const { value, id } = useMemo(
    () => checkPasswordRating(password),
    [password]
  );

  const barColor = useMemo(() => {
    switch (id) {
      case 0:
        return "--RED";
      case 1:
        return "--ORANGE";
      case 2:
        return "--YELLOW";
      case 3:
        return "--NEON_GREEN";
    }
  }, [id]);

  return (
    <div className="strengthindicator">
      <h3>STRENGTH</h3>

      <div className="strengthvalue-and-bars">
        <p className="strengthvalue">{value.toUpperCase()}</p>
        <div className="strengthbars">
          {Array(4)
            .fill(1)
            .map((_, idx) => (
              <div
                className={idx <= id ? "strengthbar filled" : "strengthbar"}
                style={{
                  backgroundColor:
                    idx <= id ? `var(${barColor})` : "var(--DARK_GREY)",
                }}
                key={idx}></div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default StrengthIndicator;
