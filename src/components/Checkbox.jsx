import React, { useState } from "react";
import Checkbox from "./Checkbox";

const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox
        label="Accept Terms and Conditions"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default App;
