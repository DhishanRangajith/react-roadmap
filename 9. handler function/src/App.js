// import logo from './logo.svg';
import './App.css';

function App() {

    const onClick = (event) => {
      console.log("event data", event);
    };

    return (
      <div>
        Click here : 
        <button type="button" onChange={onClick}>Button</button>
      </div>
    );
}

export default App;
