import React, { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div>
      <h2>Toggle Button Example</h2>
      <button onClick={handleToggle}>{isOn ? "Turn Off" : "Turn On"}</button>
      <p>The button is currently {isOn ? "on" : "off"}</p>
    </div>
  );
}

export default ToggleButton;
