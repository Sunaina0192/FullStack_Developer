import React from "react";

function AnalysisPanel({ analysis, remaining }) {
  return (
    <div className="analysis">
      <p>Characters: {analysis.chars}</p>
      <p>Words: {analysis.words}</p>
      <p>Special Characters: {analysis.specialChars}</p>
      <p>Remaining: {remaining}</p>
    </div>
  );
}

export default AnalysisPanel;