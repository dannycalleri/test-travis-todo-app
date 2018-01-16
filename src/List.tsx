import * as React from 'react';

import {
  ListElement
} from './types';

interface Props {
  data: ListElement[];
}

const List = ({ data }: Props) => (
  <div>
    <h1>Todos</h1>
    <ul>
      {data.map((d: ListElement, i: number) => (
        <li key={i} style={d.completed ? { textDecoration: 'line-through' } : {}}>{d.description}</li>
      ))}
    </ul>
  </div>
);

export default List;
