class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(title, author, isbn) {
      const newBook = {
        title: title,
        author: author,
        isbn: isbn,
        status: 'Available'
      };
      this.books.push(newBook);
      console.log(`Added book: ${title} by ${author} (ISBN: ${isbn})`);
    }
  
    displayBooks() {
      console.log('Available Books:');
      this.books.forEach(book => {
        if (book.status === 'Available') {
          console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn})`);
        }
      });
    }
  
    borrowBook(isbn) {
      const book = this.books.find(book => book.isbn === isbn);
      if (!book) {
        console.log(`Book with ISBN ${isbn} does not exist.`);
      } else if (book.status === 'Borrowed') {
        console.log(`Book with ISBN ${isbn} is currently borrowed.`);
      } else {
        book.status = 'Borrowed';
        console.log(`Book with ISBN ${isbn} has been borrowed.`);
      }
    }
  
    returnBook(isbn) {
      const book = this.books.find(book => book.isbn === isbn);
      if (!book) {
        console.log(`Book with ISBN ${isbn} does not exist.`);
      } else if (book.status === 'Available') {
        console.log(`Book with ISBN ${isbn} was not borrowed.`);
      } else {
        book.status = 'Available';
        console.log(`Book with ISBN ${isbn} has been returned.`);
      }
    }
  }
  
  
  