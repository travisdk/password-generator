import { useState } from "react";
import copyToClipboard from "../utils/copyToClipboard";
import "../css/PasswordOutput.css";

type PasswordOutputProps = {
  password: string;
};
const VISIBLE_TIMEOUT = 3000; // 3 seconds

const PasswordOutput = ({ password }: PasswordOutputProps) => {
  const [copied, setCopied] = useState(false);
  const copy = (e: React.MouseEvent<HTMLButtonElement>) => {
    const psw = (e.target as HTMLButtonElement).innerText;
    copyToClipboard(psw);
    setCopied(true);
    const id = setTimeout(() => {
      setCopied(false);
      clearTimeout(id);
    }, VISIBLE_TIMEOUT);
  };

  return (
    <>
      <button
        className="password-output-button"
        disabled={password.length === 0}
        onClick={copy}>
        {password.length > 0 ? password : "empty"}
      </button>
      {copied && <p>copied to clipboard!</p>}
    </>
  );
};

export default PasswordOutput;
