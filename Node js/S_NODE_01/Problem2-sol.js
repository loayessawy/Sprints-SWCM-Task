const fs = require("fs");

data = fs.readFileSync('problem2.json', { encoding: "utf-8" })
// console.log("Read the json in problem2.json", data); 

const cars = JSON.parse(data)

cars.accidents.forEach(element => {
    element.date = new Date(element.date).toISOString().slice(0, 10);
});
console.log(cars)

const content = JSON.stringify(cars);
fs.writeFile('output2.json', content, err => {
  if (err) {
    console.error(err);
  }
});
