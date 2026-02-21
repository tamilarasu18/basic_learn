"use client";
import { useState, useRef, useCallback } from "react";

interface CodePlaygroundProps {
  defaultCode: string;
}

export default function CodePlayground({ defaultCode }: CodePlaygroundProps) {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState("");
  const [isError, setIsError] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const runCode = useCallback(() => {
    setOutput("");
    setIsError(false);
    const logs: string[] = [];
    const fakeConsole = {
      log: (...args: unknown[]) =>
        logs.push(
          args
            .map((a) =>
              typeof a === "object" ? JSON.stringify(a, null, 2) : String(a),
            )
            .join(" "),
        ),
      error: (...args: unknown[]) =>
        logs.push("ERROR: " + args.map(String).join(" ")),
      warn: (...args: unknown[]) =>
        logs.push("WARN: " + args.map(String).join(" ")),
    };
    try {
      const fn = new Function("console", code);
      fn(fakeConsole);
      setOutput(logs.join("\n") || "(no output)");
    } catch (e) {
      setIsError(true);
      setOutput(String(e));
    }
  }, [code]);

  const resetCode = () => {
    setCode(defaultCode);
    setOutput("");
    setIsError(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const ta = textareaRef.current;
      if (!ta) return;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const newCode = code.substring(0, start) + "  " + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        ta.selectionStart = ta.selectionEnd = start + 2;
      }, 0);
    }
    if (e.ctrlKey && e.key === "Enter") {
      e.preventDefault();
      runCode();
    }
  };

  return (
    <div className="playground">
      <div className="playground-header">
        <div className="playground-title">
          <div className="playground-dots">
            <div className="playground-dot" />
            <div className="playground-dot" />
            <div className="playground-dot" />
          </div>
          JavaScript Playground
        </div>
        <div className="playground-actions">
          <button className="playground-btn reset" onClick={resetCode}>
            ↺ Reset
          </button>
          <button className="playground-btn run" onClick={runCode}>
            ▶ Run (Ctrl+Enter)
          </button>
        </div>
      </div>
      <div className="playground-editor">
        <textarea
          ref={textareaRef}
          className="playground-textarea"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
        />
      </div>
      <div className="playground-output">
        <div className="playground-output-title">Output</div>
        <div className={`playground-output-content ${isError ? "error" : ""}`}>
          {output || 'Click "Run" to execute your code...'}
        </div>
      </div>
    </div>
  );
}
