// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import MapComponent from './components/mapComp';
import FilterComponent from './components/filterComp';
import ForEachComponent from './components/forEachComp';
import FindComponent from './components/findComp';
import FindIndexComponent from './components/findIndexComp';
import ReduceComponent from './components/reduceComp';
import SomeComponent from './components/someComp';
import EveryComponent from './components/everyComp';
import SliceComponent from './components/sliceComp';
import SpliceComponent from './components/spliceComp';
import SortComponent from './components/sortComp';
import FlatComponent from './components/flatComp';
import FlatMapComponent from './components/flatmapComp';

function App() {

    const students = [
                      { "name": "Alice",   "age": 14, "height": 150, "weight": 45 },//14
                      { "name": "Brian",   "age": 15, "height": 160, "weight": 52 },//29
                      { "name": "Chathura","age": 13, "height": 148, "weight": 43 },//42
                      { "name": "Dinesh",  "age": 14, "height": 155, "weight": 48 },//56
                      { "name": "Emily",   "age": 15, "height": 158, "weight": 50 },//71
                      { "name": "Farah",   "age": 13, "height": 145, "weight": 41 },//84
                      { "name": "Gihan",   "age": 14, "height": 152, "weight": 46 },//98
                      { "name": "Heshani", "age": 15, "height": 162, "weight": 53 },//113
                      { "name": "Ishan",   "age": 14, "height": 157, "weight": 49 },//127
                      { "name": "Jeevani", "age": 13, "height": 149, "weight": 44 }//140
                    ];


    return (
      <div>
        <MapComponent list={students}/>
        <FilterComponent list={students} name="an"/>
        <ForEachComponent list={students}/>
        <FindComponent list={students} age={10}/>
        <FindIndexComponent list={students} age={10}/>
        <ReduceComponent list={students}/>
        <SomeComponent list={students} />
        <EveryComponent list={students} />
        <SliceComponent />
        <SpliceComponent />
        <SortComponent />
        <FlatComponent />
        <FlatMapComponent />
      </div>
    );
}

export default App;
