import { useState } from 'react';
import './App.css';
import Search from './components/search';

function App() {

    const [searchText, setSearchText] = useState(null);

    const onSearch = (event) => {
      setSearchText(event.target.value);
    };

    return (
      <div>
        <Search parent={onSearch}/>
        <br/>
        <p>Searching text is : {searchText}</p>
      </div>
    );
}

export default App;
