import { useState } from "react";

interface StyleButton {
  backgroundColor: string;
  color: string;
  padding: string;
  border: string;
  borderRadius: string;
  cursor: string;
  margin: string;
}

interface CountProps {
  styleBtn: StyleButton;
}

const Count = ({ styleBtn }: CountProps) => {
    
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count Item</h2>
      <h3>Current value: {count}</h3>
      <button style={styleBtn} onClick={handleIncrease}>
        Increase
      </button>
    </div>
  );
};

export default Count;
