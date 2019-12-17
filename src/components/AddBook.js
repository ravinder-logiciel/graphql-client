 
import React, {useState} from 'react';
import {useMutation} from '@apollo/react-hooks';
import {getBooks, addBookMutation} from './../queries/query';

function AddBook() {

    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    
    const [addBook] = useMutation(addBookMutation);

    const submitForm = (e) => {
        e.preventDefault()
        
        addBook({
            variables: {
                name, genre
            },
            refetchQueries: [{
                query: getBooks
            }]
        });

        setTimeout(function(){
            document.getElementById("add-book").reset();
            setName('');
            setGenre('');
        }, 1000);
    };

    return (
        <form id="add-book" onSubmit={submitForm}>
            <div className="field">
                <label>Book Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="field">
                <label>Genre Name:</label>
                <input type="text" onChange={(e) => setGenre(e.target.value)}/>
            </div>

            <button>+</button>
        </form>
    );
}

export default AddBook;