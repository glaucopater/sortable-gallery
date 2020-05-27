import React, { useState } from "react";
import SortableList from "./components/SortableList";
import ColsSelector from "./components/ColsSelector";
import "./styles/styles.scss";

const App = () => {
  const [cols, setCols] = useState(4);
  return (
    <div className="App">
      <ColsSelector cols={cols} onColsSelect={cols => setCols(cols)} />
      <SortableList cols={cols} />
    </div>
  );
};

export default App;
