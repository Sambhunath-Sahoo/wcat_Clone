let fs = require("fs");
let path = require("path");
const lineByLine = require("n-readlines");

function lineBreakToSingularFile(fileName) {
  fs.readFile(fileName, function (err, str) {
    let trimmedString = str.toString().replace(/(\r\n|\n|\r)/gm, ' ');
    fs.writeFile(path.join(process.cwd(), fileName), trimmedString, err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
      })
  });
}

function removeLargeSpace(srcFile, destFile) {
    fs.readFile(srcFile, function (err, str) {
        let trimmedString = str.toString().trim();
        fs.writeFile(path.join(process.cwd(), destFile), trimmedString, err => {
            if (err) {
              console.error(err)
              return
            }
            //file written successfully
        })
    });
}

module.exports = {
  lineBreakToSingularFile,
  removeLargeSpace,
};
