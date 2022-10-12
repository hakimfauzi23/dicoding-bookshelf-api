const bookshelf = require('../../storage/bookshelf');

const getBooks = (request, h) => {
  const { name, reading, finished } = request.query;

  request.bookshelf = bookshelf;

  if (name) {
    request.bookshelf = bookshelf.filter((book) => {
      const data = book.name.toLowerCase().includes(name.toLowerCase());
      return data;
    });
  }

  if (reading) {
    const readingStatus = reading === '1';
    request.bookshelf = request.bookshelf.filter((book) => book.reading === readingStatus);
  }

  if (finished) {
    const finishedStatus = finished === '1';
    request.bookshelf = request.bookshelf.filter((book) => book.finished === finishedStatus);
  }

  return h
    .response({
      status: 'success',
      data: {
        books: request.bookshelf.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    })
    .code(200);
};

module.exports = getBooks;
