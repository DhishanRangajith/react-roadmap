// import logo from './logo.svg';
import './App.css';
import RowComp from './components/RowComp'

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
    return (<table>
            <tbody>
             <RowComp id={1} name="A" status={1} />
             <RowComp id={2} name="B" status={0} />
             <RowComp id={3} name="C" status={1} />
             </tbody>
          </table>);
}

export default App;
