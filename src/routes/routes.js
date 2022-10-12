const bookHandler = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: bookHandler.addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: bookHandler.getBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: bookHandler.getBook,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: bookHandler.updateBook,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: bookHandler.deleteBook,
  },
];

module.exports = routes;
