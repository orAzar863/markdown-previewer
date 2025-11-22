import React from "react";

const ToggleBar = ({ onClick, icon }) => (
  <div className="toggle-bar">
    <button onClick={onClick} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
      {icon}
    </button>
  </div>
);

export default ToggleBar;
