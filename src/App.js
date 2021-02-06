import './App.css';
import { useState } from 'react';

function App() {

const [text , setText] = useState("");

const [Lines, SetLine] = useState([]);

const onTextChange = (event) =>{
  setText(event.target.value)
};

const onSent = () => {
  SetLine(Line => [...Lines, text])
  setText("");
}
  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        {
          Lines.map(x =>{
          return <div className="App-chatroom-text">
                {x}
            </div>
          })
        }
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input"value={text} onChange={onTextChange}/>
        <div className="App-textbox-send" onClick={onSent}>Send!</div>
      </div>
    </div>
  );
}

export default App;
