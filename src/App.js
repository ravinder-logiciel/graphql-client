import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import Book from './components/Book';
import AddBook from './components/AddBook';

//apollo cilent
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Book/>
        <h3>Add Book</h3>
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
