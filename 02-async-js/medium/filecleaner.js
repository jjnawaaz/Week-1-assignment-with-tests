const fs = require("fs");

fs.readFile("a.txt", "utf-8", compute);

function compute(err, data) {
  let convertedData = clean(data);
  fs.writeFile("a.txt", convertedData, "utf-8", () => {
    console.log("Removed Spaces and Changed the File ");
  });
}

function clean(data) {
  let cleanData = [];
  data = data.split(" ");

  for (let i = 0; i < data.length; i++) {
    if (data[i] == "") {
    } else {
      cleanData.push(data[i]);
    }
  }

  let cleanString = cleanData.join(" ");
  return cleanString;
}
