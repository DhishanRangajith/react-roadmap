import { useState } from "react";

function App() {

    const [text, setText] = useState("Hello...");

    const func = (event) => {
      setText(event.target.value);
    };

    return (
      <div>
        <p>Type a text : </p>
        <input value={text} onChange={func}/>
        <p>Typing : {text}</p>
      </div>
    );
}

export default App;
