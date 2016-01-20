const percent = require("../lib");

console.log(percent(10).of(50));
// 20

console.log(percent(50).get(20));
// 10

console.log(percent(20).from(50));
// 10

console.log(percent(20).is(10));
// 50

console.log(percent("10%").from(420));
// 42
