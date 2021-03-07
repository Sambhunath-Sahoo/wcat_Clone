let fs = require("fs");
let path = require("path");
const readline = require('readline');


function giveNumberingToNonEmptyLines(fileName) {
        let i = 1;
        const readInterface = readline.createInterface({
              input: fs.createReadStream(fileName),
        });
        
        readInterface.on('line', function(line) {
            if(line !== ""){
                console.log(i, line); i++;
            } else {
                console.log(line);
            }
         });
}

module.exports = {
    giveNumberingToNonEmptyLines,
}