const sum = require("./sum");
const test = ("adds 1 + 2 to equal 3", () => {
  const expect = (sum(1, 2)).toBe(3);
  console.log(expect);
});
console.log(test);