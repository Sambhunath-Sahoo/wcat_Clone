function helperFunction() {
    console.log(`List of all the commands:
    node wcat filename                          Displays content of the file in the terminal. 
    node wcat filename1 filename2 filename3..   Displays content of all files in the terminal(contactinated form) in the given order.
    node wcat -s filename                       Convert big line breaks into a singular file. 
    node wcat -n filename                       Give numbering to all the lines. 
    node wcat -b filename                       Give numbering to non-empty lines. 
    node wcat filename > filename2              Put all the content of filename into filename2 by overriding also creates filename2 if it doesn't exist.
    node wcat filename >> filename2             Append all the content of filename into filename2.
    node wcat -s filename > filename2           Get the file content of filename remove large spaces and save the output in filename2.
    node wcat.js help                           help command
    `);
}

module.exports = {
    fn: helperFunction
}