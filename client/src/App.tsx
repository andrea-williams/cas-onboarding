import React from 'react';
import logo from './logo.svg';
import graphql from 'babel-plugin-relay/macro'
import './App.css';
import TodoItem from './components/TodoListItem';
import TodoList from './components/TodoList'
import { loadQuery, useLazyLoadQuery } from 'react-relay';
import { RelayEnvironment } from './RelayEnvironment';

const AllTodosQuery = graphql`
  query AppQuery {
    ...TodoList_query
  }
`

function App(props: any) {
  const data = useLazyLoadQuery(AllTodosQuery, {})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <TodoList query={data} />
      </body>
    </div>
  );
}

export default App;
