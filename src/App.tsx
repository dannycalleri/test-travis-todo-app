import * as React from 'react';

import List from './List';
import {
  ListElement
} from './types';

import './App.css';

const data: ListElement[] = [
  { description: 'do the homework', completed: false },
  { description: 'play drums', completed: true },
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <List data={data} />
      </div>
    );
  }
}

export default App;
