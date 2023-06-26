import { passwordStrength } from "check-password-strength";
export type StrengthRatingResult = {
  id: number;
  value: string;
  contains: string[];
  length: number;
};
const checkPasswordRating = (password: string): StrengthRatingResult => {
  console.log("checkPasswordRating called");
  return passwordStrength(password) as StrengthRatingResult;
};

export default checkPasswordRating;
