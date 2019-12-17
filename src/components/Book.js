 
import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {getBooks} from './../queries/query'

function Book() {

    const { loading, error, data } = useQuery(getBooks);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            book List
            
            <ul id="book-list">
            {data.books.map(book => (
                <li key={book.id}>
                {book.name}
                </li>
            ))}
            </ul>
            
        </div>
    );
}

export default Book;