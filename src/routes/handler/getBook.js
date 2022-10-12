const bookshelf = require('../../storage/bookshelf');

const getBook = (request, h) => {
  const { bookId } = request.params;

  const book = bookshelf.filter((e) => e.id === bookId)[0];

  if (book) {
    return h
      .response({
        status: 'success',
        data: {
          book,
        },
      })
      .code(200);
  }

  return h
    .response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    })
    .code(404);
};

module.exports = getBook;
