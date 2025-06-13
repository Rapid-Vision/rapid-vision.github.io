"use client";

import { Copy, Check, Code } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  code: string;
  language: string;
  filename?: string;
  showLineNumbers?: boolean;
};

export const CodeBlock = ({
  code,
  language,
  filename,
  showLineNumbers = false,
}: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const CopyButton = () => (
    <Button
      variant="ghost"
      className="absolute right-4 top-4 z-10 text-muted-foreground hover:text-slate-50 hover:bg-transparent"
      onClick={handleCopy}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </Button>
  );

  const Title = () => (
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-white flex items-center">
          <Code className="w-5 h-5 mr-2" />
          {filename}
        </CardTitle>
      </div>
    </CardHeader>
  );

  const Content = () => (
    <CardContent>
      <SyntaxHighlighter
        language={language}
        showLineNumbers={showLineNumbers}
        style={atomOneDark}
        customStyle={{ background: "transparent", padding: 0 }}
        lineNumberStyle={{ color: "#999", paddingRight: "1em" }}
      >
        {code}
      </SyntaxHighlighter>
    </CardContent>
  );

  return (
    <Card className="bg-gradient-to-br from-slate-900 to-gray-800 border-slate-700 backdrop-blur-sm shadow-xl">
      <CopyButton />
      {filename ? <Title /> : null}
      <Content />
    </Card>
  );
};
