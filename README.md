# wcat_Clone

wCat is a clone of cat command available in bash but not in windows cmd.<br>

It is used to display or make a copy content of one or more files in the terminal. <br> 

General Syntax:-s <br>
wcat [options] [files]<br>


option to remove big line break (-s) <br>
option to add line number to non empty lines (-b) <br>
option to add line numbers to all lines (-n) <br>
<br>
Commands:<br>
<br>
<br>1- wcat filename => displays content of the file in the terminal 
<br>2- wcat filename1 filename2 filename3... => displays content of all files in the terminal(contactinated form) in the given order.
<br>3- wcat -s filename => convert big line breaks into a singular file 
<br>4- wcat -n filename => give numbering to all the lines 
<br>5- wcat -b filename => give numbering to non-empty lines 
<br>6- wcat filename > filename2 => put all the content of filename into filename2 by overriding also creates filename2 if it doesn't exist.
<br>7- wcat filename >> filename2 => append all the content of filename into filename2
<br>8- wcat -s filename > filename2 =>get the file content of filename remove large spaces and save the output in filename2
