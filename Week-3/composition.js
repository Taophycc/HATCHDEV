"use strict";
// class Lib {
//   books: string[];
//   availableBooks: string[];
//   constructor(books: string[]) {
//     this.books = books;
//     this.availableBooks = books;
//   }
//   borrow(name: string): string {
//     if (this.availableBooks.includes(name)) {
//       const idx = this.availableBooks.indexOf(name);
//       this.availableBooks.splice(idx, 1);
//       return name;
//     }
//     return "";
//   }
// }
// const bookz = ["A", "B", "C"];
// const library = new Lib(bookz);
// library.borrow("A");
// library.borrow("A");
// console.log(library);
// console.log(bookz);
// class Book {
//   name: string;
//   isAvailable: boolean;
//   constructor(name: string, isAvailable: boolean) {
//     this.name = name;
//     this.isAvailable = isAvailable;
//   }
// }
// class Member {
//   name: string;
//   borrowedBooks: Book[] = [];
//   constructor(name: string) {
//     this.name = name;
//   }
//   borrowBook(book: Book) {
//     if (book.isAvailable) {
//       this.borrowedBooks.push(book);
//       book.isAvailable = false;
//       console.log(`${this.name} hass borrowed${book.name}`);
//     }
//   }
//   borrowedBook(book: Book) {
//     if (book.isAvailable) {
//       this.borrowedBook.push(book);
//       console.log(`${this.name}`);
//     }
//   }
//   borrow(name: string): string {
//     const findBook = this.books.find((b) => b.name == name);
//     if (!findBook) {
//       console.log(`Book not available`);
//     } else {
//       this.borrowedBooks.push(findBook);
//     }
//     return "";
//     //     this.books.forEach((book: Book) => {
//     //       if (book.name == name) {
//     //         if (book.isAvailable) {
//     //           return name;
//     //         }
//     //       }
//     //     });
//     //     console.log("Sorry not found");
//     //     return "";
//     //   }
//   }
// }
// class Libz {
//   books: Book[] = [];
//   addBook(book: Book) {
//     this.books.push(book);
//   }
//   listBooks() {
//     this.books.forEach((book) => {
//       console.log(book);
//       if (book.isAvailable) {
//         console.log(book);
//       }
//     });
//     return "";
//   }
// }
// const book1 = new Book("To Kill a Mockingbird", true);
// const book2 = new Book("1984", true);
// const book3 = new Book("The Great Gatsby", true);
// const book4 = new Book("Moby Dick", true);
// const lib2 = new Libz();
// lib2.addBook(book1);
