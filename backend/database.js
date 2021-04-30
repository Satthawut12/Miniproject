const bcrypt = require("bcrypt");

let users = {
  users: [
    {
      id: 1,
      username: "Satthawut",
      password: "$2b$10$0AsMSQaUB0AlLnKzgeUOfOE.hWUodtuR4NOU954XLVy2gy3lBWsdO",
      email: "satthawut@gmail.com",
    },
  ],
};

let cals = {
  cal: [
    {
      calID: 1,
      username: "admin",
      menuName: "ผัดเผ็ด",
      totalCal: 70,
    },
  ],
};

let calculators = {
  calculator: [
    {
      menuName: "ผัดเผ็ด",
      totalCal: 70,
    },
    {
      menuName: "ส้มตำ",
      totalCal: 80,
    }
  ]
} 

const SECRET = "your_jwt_secret";
const NOT_FOUND = -1;

exports.users = users;
exports.SECRET = SECRET;
exports.NOT_FOUND = NOT_FOUND;

exports.setUsers = function (_users) {
  users = _users;
};

// === validate username/password ===
exports.isValidUser = async (username, password) => {
  const index = users.users.findIndex((item) => item.username === username);
  return await bcrypt.compare(password, users.users[index].password);
};

// return -1 if user is not existing
exports.checkExistingUser = (username) => {
  return users.users.findIndex((item) => item.username === username);
};

exports.findallMenu = async () => {
  return cals.cal;
};

exports.addMenu = async (req, username) => {
  const { menuName, totalCal } = req;
  let calID = await this.findCalID();
  let newData = {};
  newData.calID = calID;
  newData.username = username;
  newData.menuName = menuName;
  newData.totalCal = totalCal;
  console.log(newData);
  cals = { cal: [...cals.cal, newData] };
  return cals
};

exports.findCalID = async () => {
  let lastIndex = await cals.cal.length;

  return cals.cal[lastIndex - 1].calID + 1;
};

exports.editMenu = async (req) => {
  const { menuName, totalCal, calID } = req;
  let found = await cals.cal.find(
    (find) => find.calID == calID
  );
  if (!found) {
    return false;
  }
  found.menuName = menuName;
  found.totalCal = totalCal
  return found;
};

exports.deletecalID = async (calID) => {
  let found = await cals.cal.find(
    (find) => find.calID == calID
  );
  if (!found) {
    return false;
  }
  cals.cal = await cals.cal.filter(
    (find) => find.calID != calID
  );
  return cals.cal;
};

exports.addcalculator = async (req) => {
  const { menuName,totalCal } = req
  let newData = {};
  newData.menuName = menuName;
  newData.totalCal = totalCal;
  console.log(newData);
  calculators = { calculator: [...calculators.calculator, newData] };
  let totalcal = await this.calculator()
  return calculators
}

exports.calculator = async () => {
  let result = await calculators.calculator.reduce((prev, cur) => prev + cur.totalCal, 0)
  console.log("total cal: ",result);
  return result
}