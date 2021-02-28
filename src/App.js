import './App.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function App() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);



  const keyPress = (event) => {
    if (event.which === 13){
      onSend();
    }
  };

const onSend = () => {
  SetLine(Line => [...Lines, text])
  setText("");
}



  return (

    <div className="App">
      <div className="App-header">
        Welcome to My App
      </div>
      <div className="App-chatroom">
        {
          Lines.map(x => {
            return <div className="App-chatroom-text">
                    {x}
                   </div>
          })
        }
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" 
        value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        
        <div className="App-textbox-send" onClick={onSend}>Send!</div>
      </div>

        <div>
        <Link to="/friend-list">
                <button>
                    Go Chatroom
                </button>
        </Link>

        <Link to="/AllChat">
                <button>
                    Go All-Chat
                </button>
        </Link>


        </div>

    </div>
  );
}
export default App;