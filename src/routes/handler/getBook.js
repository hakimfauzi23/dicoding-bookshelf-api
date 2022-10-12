const bookshelf = require('../../storage/bookshelf');

const getBook = (request, h) => {
  const { bookId } = request.params;

  const bookData = bookshelf.filter((book) => book.id === bookId);

  if (bookData.length > 0) {
    return h
      .response({
        status: 'success',
        data: {
          bookData,
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
