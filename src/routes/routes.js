const bookHandler = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: bookHandler.addBook,
  },
];

module.exports = routes;
