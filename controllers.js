const connection = require("./db");

const book = {

  title: "hhhh",
  author: "nnnnnnnnn",
  published_at: "Jggggggg",
  price: null,
};

const addbook = (book) => {
  const queryString = `INSERT INTO book (
    title,
    author,
    published_at,
    price) VALUES(?,?,?,?)`;
  const data = [ book.title, book.author, book.published_at, book.price];
  connection.query(queryString, data, (err, result) => {
   if(err){
     console.log(err.response);
   }
   console.log(result);
  });
};

const getAll = () => {
  const query = `SELECT * FROM book`;
  connection.query(query, (err, result, fields) => {
    console.log("result", result);
    console.log("==========================");
    // console.log("fields", fields);
  });
};

// const getById = (id) => {
//   const query = `SELECT * FROM book WHERE id = ?`;
//   const data = [id];
//   connection.query(query, data, (err, result, fields) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log("result by id", result);
//     console.log("==========================");
//     //   console.log("fields",fields);
//   });
// };

const UPDATE = (id) => {
  const queryString = `UPDATE book
  SET title = 'dreaming'
  WHERE id =${id} `;
  // const data = [id];
  connection.query(queryString, (err, result) => {
   if(err){
     console.log(err.response);
   }
   console.log(result);
  });
}


const deleter = (id) => {
  const queryString = `DELETE FROM  book
  WHERE id = ? `;
   const data = [id];
  connection.query(queryString, data , (err, result) => {
   if(err){
     console.log(err.response);
   }
   console.log(result);
  });
}

const getAllOrdered  = () => {
  const query = `SELECT * FROM book ORDER BY id DESC`;
  connection.query(query, (err, result, fields) => {
    console.log("result", result);
    console.log("==========================");
    // console.log("fields", fields);
  });
};

const getAllNullPrice = () => {
  const query = `SELECT * FROM book WHERE price IS NULL `;
  connection.query(query, (err, result, fields) => {
    console.log("result", result);
    console.log("==========================");
    // console.log("fields", fields);
  });
};

//  addbook(book);
//  getAll();
//  UPDATE(2)

// deleter(5);
// getAllOrdered() ; 

getAllNullPrice()