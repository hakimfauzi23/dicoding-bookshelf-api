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
];

module.exports = routes;
