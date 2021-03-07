var fs = require("fs");
var path = require("path");

let bFile = require("./commands/-b");
let nFile = require("./commands/-n");
let sFile = require("./commands/-s");
let helpFile = require("./commands/help");
let input = process.argv.slice(2);

// node wcat.js ( filename / -s / -n / -b )
let command = input[0];

switch (command) {
  case "-s":
      if(input[2] === ">") {
        sFile.removeLargeSpace(input[1], input[3]);
      } else {
        sFile.lineBreakToSingularFile(input[1]);
      }
      break;
  case "-n":
      nFile.giveNumberingToAllLines(input[1]);
      break;
  case "-b":
      bFile.giveNumberingToNonEmptyLines(input[1]);
      break;
  case "help":
    helpFile.fn();
    break;
  default:
    if (input[1] == ">") {
        copyContent(input[0], input[2]);
    } else if (input[1] == ">>") {
        appendContent(input[0], input[2]);
    } else {
        showContent(input);
    }
    break;
}



function showContent(numberOffiles) {
  for (let i = 0; i < numberOffiles.length; i++) {
    let fileName = numberOffiles[i];
    const dest = path.join(process.cwd(), fileName);

    try {
      if (fs.existsSync(dest)) {
        //file exists
        // reading the file and printing it to the console
        fs.readFile(fileName, function (err, buf) {
          console.log(buf.toString());
        });
      } else {
        // file does not exist
        console.log(fileName, "file does not exist error.");
      }
    } catch (err) {
      console.error(err);
    }
  }
}


function copyContent(srcFile, destFile) {
    try {
        if(fs.existsSync(srcFile)) {
            // file exist
            fs.copyFile(srcFile, destFile, () => {
                console.log("Copied Successfully!"); // why copied successfully is not printing to the console.
              });
        } else {
            // make a new file 
            // open function with filename, file opening mode and callback function
            fs.open(destFile, 'w', function (err, file) {
            if (err) throw err;
                // copy content
                fs.copyFile(srcFile, destFile, () => {
                    console.log("Copied Successfully!");  // why copied successfully is not printing to the console.
                  });
            });
        }
    } catch (err) {
        console.error(err);
    }
}


function appendContent(srcFile, destFile) {
    fs.readFile(srcFile, function (err, buf) {
        var data = buf;
        fs.appendFile(destFile,data, 'utf8', function(err) {     
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully."); // why copied successfully is not printing to the console.
            });
      });
}

