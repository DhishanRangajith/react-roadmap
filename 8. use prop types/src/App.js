// import logo from './logo.svg';
import './App.css';
import RowComp from './components/RowComp'

function App() {
    return (<table>
              <tbody>
                <RowComp id={1} name="A" status={1} />
                <RowComp id={2} name="B" status={0} />
                <RowComp id={3} name="C" status={1} />
              </tbody>
          </table>);
}

export default App;
