const bcrypt = require("bcrypt");

let users = {
  users: [
    {
      id: 1,
      username: "satthawut",
      password: "$2b$10$0AsMSQaUB0AlLnKzgeUOfOE.hWUodtuR4NOU954XLVy2gy3lBWsdO",
      email: "satthawut@gmail.com",
    },
    {
      id: 2,
      username: "haha",
      password: "$2b$10$0AsMSQaUB0AlLnKzgeUOfOE.hWUodtuR4NOU954XLVy2gy3lBWsdO",
      email: "haha@gmail.com",
    },
  ],
};

const SECRET = "your_jwt_secret";
const NOT_FOUND = -1;

exports.users = users;
exports.SECRET = SECRET;
exports.NOT_FOUND = NOT_FOUND;