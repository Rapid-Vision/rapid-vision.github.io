"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  code: string;
  className?: string;
};

export const CommandBlock = ({ code, className }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const CopyButton = () => (
    <Button
      variant="ghost"
      className="text-muted-foreground hover:bg-transparent hover:shadow-none m-auto"
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </Button>
  );

  return (
    <div
      className={`relative cursor-pointer w-fit mx-auto bg-slate-100 hover:bg-slate-200 shadow-lg hover:shadow-xl px-6 py-3 rounded-2xl ${className}`}
      onClick={handleCopy}
    >
      <code className="text-xl text-slate-950 px-2 py-1 rounded">
        <span className="text-blue-700">$ </span>
        {code}
      </code>
      <CopyButton />
    </div>
  );
};
