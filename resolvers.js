const data = {
  authors: [
    { id: 1, name: "Author A", bookIds: [201, 202] },
    { id: 2, name: "Author B", bookIds: [203] },
    { id: 3, name: "Author C", bookIds: [204, 205] },
    { id: 4, name: "Author D", bookIds: [206] },
    { id: 5, name: "Author E", bookIds: [207, 208] },
    { id: 6, name: "Author F", bookIds: [209] },
    { id: 7, name: "Author G", bookIds: [210] },
    { id: 8, name: "Author H", bookIds: [] },
    { id: 9, name: "Author I", bookIds: [] },
    { id: 10, name: "Author J", bookIds: [] },
  ],
  books: [
    { id: 201, title: "Book 1", publishedYear: 2000, authorId: 1 },
    { id: 202, title: "Book 2", publishedYear: 2002, authorId: 1 },
    { id: 203, title: "Book 3", publishedYear: 2004, authorId: 2 },
    { id: 204, title: "Book 4", publishedYear: 2006, authorId: 3 },
    { id: 205, title: "Book 5", publishedYear: 2008, authorId: 3 },
    { id: 206, title: "Book 6", publishedYear: 2010, authorId: 4 },
    { id: 207, title: "Book 7", publishedYear: 2012, authorId: 5 },
    { id: 208, title: "Book 8", publishedYear: 2014, authorId: 5 },
    { id: 209, title: "Book 9", publishedYear: 2016, authorId: 6 },
    { id: 210, title: "Book 10", publishedYear: 2018, authorId: 7 },
  ],
};

export const resolvers = {
  //   Query: {
  // authors: () => {
  //   return [
  //     {
  //       id: 1,
  //       name: "Vishesh Rajput",
  //     },
  //   ];
  // },
  // books: () => {
  //   return [
  //     {
  //       id: 1,
  //       title: "Vishesh Tantra",
  //       publishedYear: 2024,
  //     },
  //   ];
  // },
  // }

  Book: {
    author: (parent, args, context, info) => {
      console.log(parent);
      return data.authors.find(
        (authorDetail) => authorDetail.id === parent.authorId
      );
    },
  },
  Author: {
    books: (parent, args, context, info) => {
      return data.books.filter((book) => parent.bookIds.includes(book.id));
    },
  },

  Query: {
    authors: () => {
      return data.authors;
    },
    books: () => {
      return data.books;
    },
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
      console.log(args);
      const newBook = { ...args, id: data.books.length + 1 };
      data.books.push(newBook);
      return newBook;
    },
  },
};
