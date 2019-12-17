 import gql from 'graphql-tag';

const getBooks = gql`
    query getBooks{
        books {
            id
            name
            genre
        }
}`;

const addBookMutation = gql`
    mutation addBook($name: String!, $genre: String!){
        addBook(name: $name genre: $genre){
            id
            name
            genre
        }
    }`;

export {getBooks, addBookMutation}