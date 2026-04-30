import React from "react";

function Preview({ text }) {
  return (
    <div className="preview">
      <h3>Live Preview</h3>
      <p>{text}</p>
    </div>
  );
}

export default Preview;