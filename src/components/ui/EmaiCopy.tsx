import { useState } from "react";
import MagicButton from "./MagicButton";
import { Copy } from "lucide-react";

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "monir.mzs17@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <MagicButton
      title={copied ? "Email is Copied!" : "Copy my email address"}
      icon={<Copy />}
      position="left"
      handleClick={handleCopy}
      otherClasses="!bg-[#161A31]"
    />
  );
};

export default CopyEmail;
