
module.exports = {
   shelfBook,
   unshelfBook,
   listTitles,
   searchShelf
};

function shelfBook(bookObject, shelfArray) {
  if (shelfArray.length < 3) {
    shelfArray.unshift(bookObject)   
  }  
}

function unshelfBook(bookTitle, booksArray) {
 for (var i = 0; i < booksArray.length; i++) {
  if (booksArray[i].title === bookTitle) {
   booksArray.splice(i, 1)
  }
 }
 return booksArray
}

function listTitles(booksArray) {
  var bookTitles = []
  for ( var i = 0; i < booksArray.length; i++) {
    if (!booksArray[i].hasOwnProperty('title')) {
      continue;
    }
    bookTitles.push(booksArray[i].title)
  }
  return bookTitles.join(', ')
}

function searchShelf(booksArray, bookTitle) {
  for (var i = 0; i < booksArray.length; i++) {
    if (booksArray[i].title === bookTitle) {
      return true 
    }
  }
  return false
}
