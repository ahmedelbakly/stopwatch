import React from "react";

const Btn = ({ text, callback, color, bg }) => {

  return (
    <button onClick={callback} style={{ color: color, backgroundColor: bg }}>
      {text}
    </button>
  );
};

export default Btn;
