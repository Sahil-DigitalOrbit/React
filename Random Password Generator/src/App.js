import { useState } from "react";
import "./App.css";

function App() {
  let [setState,changeState]=useState({
    capital:false,
    small:false,
    number:false,
    special:false
  });

  return (
    <div className="App">
      <div className="container">
        <form>
          <div className="password-section">
            <input type="text" className="password-display" readOnly name="password-input"></input>
            <button>Copy</button>
          </div>
          <div className="checkBoxes-section">
            <div>
              <label for="capital"> Include Capital Alphabets</label>
              <input type="checkbox" id="vehicle1" name="capital" value="Bike" />
            </div>
            <div>
              <label for="small"> Include Small Alphabets</label>
              <input type="checkbox" id="vehicle2" name="small" value="Car" />
            </div>
            <div>
              <label for="number"> Include Numbers</label>
              <input type="checkbox" id="vehicle3" name="number" value="Boat" />
            </div>
            <div>
              <label for="special"> Include Special Characters</label>
              <input type="checkbox" id="vehicle3" name="special" value="Boat" />
            </div>
          </div>
          <button>Generate</button>
        </form>
      </div>
    </div>
  );
}

export default App;
