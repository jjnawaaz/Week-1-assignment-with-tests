const fs = require("fs");

fs.writeFile("b.txt", "Hello Iam Writing File from Node JS", (data) => {
  console.log("Data Saved");
});
