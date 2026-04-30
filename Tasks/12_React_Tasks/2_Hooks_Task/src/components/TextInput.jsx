import React, { useRef, useEffect } from "react";

function TextInput({ text, setText }) {
  const inputRef = useRef();

  // autofocus on load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const clearText = () => {
    setText("");
    inputRef.current.focus();
  };

  return (
    <div className="input-box">
      <textarea
        ref={inputRef}
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <button onClick={clearText}>Clear</button>
    </div>
  );
}

export default TextInput;