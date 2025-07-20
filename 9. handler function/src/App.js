// import logo from './logo.svg';
import './App.css';

function App() {

    const onClick = (event) => {
      console.log("event data", event);
    };

    return (
      <div>
        Click here : 
        <button type="button" onClick={onClick}>Button</button>
        <input type="text" onChange={onClick}></input>
      </div>
    );
}

export default App;
