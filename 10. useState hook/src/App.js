// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

    const [a, b] = useState();

    const onChange = (event) => {
      b(event.target.value);
    };

    return (
      <div>
        Click here : 
        <input type="text" onChange={onChange} />
        <p>Entered text is : {a}</p>
      </div>
    );
}

export default App;
