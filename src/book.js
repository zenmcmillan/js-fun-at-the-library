

module.exports = {
  createTitle,
   buildMainCharacter,
   saveReview,
   calculatePageCount,
   writeBook,
   editBook
}

function createTitle(title) {
 return `The ${title}`
}

function buildMainCharacter(theName, theAge, thePronouns) {
return {name: theName, age: theAge, pronouns: thePronouns}
}

function saveReview(commentString, reviewsArray) {
    if(!reviewsArray.includes(commentString)) {
     reviewsArray.push(commentString)
     return reviewsArray
   }   
 }

function calculatePageCount(bookTitle) {
  var title = bookTitle
  var titleLength = title.trim().length * 20
  return titleLength
}

function writeBook(bookTitle, bookCharacter, genre) {
  return {title: bookTitle,
          mainCharacter: bookCharacter,
          pageCount: calculatePageCount(bookTitle),
          genre}
}

function editBook(book) {
  return book.pageCount = book.pageCount * .75
}