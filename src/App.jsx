import { useState } from 'react'


const Color = ({ color, onClick, isSelected }) => {
  return( 
  <div className={`color ${color} ${isSelected ? "selected" : ""} `} 
  onClick={() => onClick(color)}>
  </div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState()
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="orange" onClick={setSelectedColor} isSelected={selectedColor === "orange"}/>
        <Color color="red" onClick={setSelectedColor} isSelected={selectedColor === "red"}/>
        <Color color="blue" onClick={setSelectedColor} isSelected={selectedColor === "blue"}/>
      </div>
    </div>
  );
};

export default App;