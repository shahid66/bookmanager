import React, { useState } from "react";
import BookSearch from "./BookSearch";
import BookSort from "./BookSort";
import BookList from "./BookList";

const BookBoard = () => {
  let Allbooks = [
    {
      id: crypto.randomUUID(),
      title: "JavaScript and Jquery",
      author: "Jon Duckett",
      price: 50,
      star: 4,
      isFavourite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Web Development",
      author: "Jon Duckett",
      price: 62,
      star: 5,
      isFavourite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Web API",
      author: "Kawser",
      price: 40,
      star: 2,
      isFavourite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Data Base",
      author: "Shariar",
      price: 100,
      star: 4,
      isFavourite: true,
    },
  ];

  const [books, setBooks] = useState(Allbooks);
  const onSearch = (text) => {
    const filtered = books.filter((book) =>
      book.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );

    setBooks([...filtered]);
  };

  const onSort = (text) => {
    if (text === "name_asc") {
      books.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      setBooks([...books]);
    } else if (text === "name_desc") {
      books.sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        }
        if (a.title > b.title) {
          return -1;
        }
        return 0;
      });
      setBooks([...books]);
    } else if (text === "year_asc") {
      books.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      setBooks([...books]);
    } else {
      books.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      setBooks([...books]);
    }
  };

  const isFav = (bookId) => {
    const bookIndex = books.findIndex((book) => book.id === bookId);
    const newBooks = [...books];
    newBooks[bookIndex].isFavourite = !newBooks[bookIndex].isFavourite;
    setBooks(newBooks);
  };

  return (
    <main className="my-10 lg:my-14">
      <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          <div>
            <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
            <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
              Trending Books of the Year
            </h2>
            <BookSearch onSearch={onSearch} />
          </div>

          <BookSort onSort={onSort} />
        </div>
      </header>

      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book, i) => (
          <BookList key={i} book={book} isFav={isFav} />
        ))}
      </div>
    </main>
  );
};

export default BookBoard;
