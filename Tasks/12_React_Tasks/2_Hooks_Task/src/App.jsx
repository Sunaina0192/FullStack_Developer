import React, { useState, useEffect, useCallback } from "react";
import TextInput from "./components/TextInput";
import AnalysisPanel from "./components/AnalysisPanel";
import Warning from "./components/Warning";
import Preview from "./components/Preview";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [analysis, setAnalysis] = useState({
    words: 0,
    chars: 0,
    specialChars: 0,
  });

  const maxLimit = 200;
  const remaining = maxLimit - text.length;

  // useCallback (optimization)
  const analyzeText = useCallback((text) => {
    const words =
      text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    const chars = text.length;

    const specialChars = text.replace(/[a-zA-Z0-9\s]/g, "").length;

    return { words, chars, specialChars };
  }, []);

  // useEffect (runs when text changes)
  useEffect(() => {
    const result = analyzeText(text);
    setAnalysis(result);
  }, [text, analyzeText]);

  // localStorage save
  useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);

  // load saved text
  useEffect(() => {
    const saved = localStorage.getItem("text");
    if (saved) setText(saved);
  }, []);

  return (
    <div className="app">
      <h1>Text Analyzer</h1>

      <TextInput text={text} setText={setText} />

      <Warning
        message={
          text.length > 200
            ? "Limit exceeded!"
            : text.length > 160
            ? "Warning: nearing limit"
            : ""
        }
      />

      <AnalysisPanel analysis={analysis} remaining={remaining} />

      <Preview text={text} />
    </div>
  );
}

export default App;