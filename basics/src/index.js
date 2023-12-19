import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { books } from './books';
import Book from './Book';

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} getBook={getBook} number={index} />
          );
        })}
      </section>
    </>
  );
};

/*const EventExample = () => {
  const handleFormInput = () => {
    console.log('handle form input');
  };

  const handleButtonClick = () => {
    alert('handle button click');
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('handle form submission');
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        <button type="submit">submit</button>
        <button onClick={handleButtonClick}>click me</button>
      </form>
    </section>
  );
};*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
