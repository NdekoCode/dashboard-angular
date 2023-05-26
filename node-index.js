const path = require("path");
const fs = require("fs/promises");
const pathFile = path.join(
  __dirname,
  path.sep +
    "src" +
    path.sep +
    "app" +
    path.sep +
    "libs" +
    path.sep +
    "data" +
    path.sep +
    "db.json"
);
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
/*
const date = generateRandomDates();
console.log(
  typeof date,
  date.toLocaleDateString(),
  date.toLocaleTimeString()
); */
function generateRandomDates() {
  const startDate = new Date(2023, 0, 1);
  const endDate = new Date(2023, 5, 26);
  return randomDate(startDate, endDate);
}

(async () => {
  const file = await fs.readFile(pathFile, "utf8");
  const newData = JSON.parse(file);
  const userStatus = [true, false];
  const userFile = newData.users.map((user) => {
    const randomIndex = parseInt(Math.random() * userStatus.length);
    user.isTfaEnabled = userStatus[randomIndex];
    return user;
  });
  await fs.writeFile(pathFile, JSON.stringify({ users: userFile }));
})();
