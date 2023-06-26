const copyToClipboard = (password: string) => {
  navigator.clipboard.writeText(password);
};
export default copyToClipboard;
