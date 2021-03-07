let fs = require("fs");
let path = require("path");
const readline = require('readline');

function giveNumberingToAllLines(fileName) {
    let i = 1;
    const readInterface = readline.createInterface({
          input: fs.createReadStream(fileName),
    });
    
    readInterface.on('line', function(line) {
      console.log(i, line);
      i++;
     });
}


module.exports = {
  giveNumberingToAllLines,
};
