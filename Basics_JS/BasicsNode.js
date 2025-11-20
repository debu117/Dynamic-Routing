//Node JS is JAVA SCRIPT  Runtime environment
//It is used to run JavaScript code outside the browser
//It is built on Chrome's V8 JavaScript engine

//File System Module writeFile
/*const fs = require("fs");
fs.writeFile("Fisrt.txt", "This is Debojyoti", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("done");
  }
});*/

//append File
/*
const fs = require("fs");
fs.appendFile("Fisrt.txt", " Oh!! Hi", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("done");
  }
});
*/

//Rename file
/*
const fs = require("fs");
fs.rename("Fisrt.txt", "New.txt", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("done");
  }
});
*/
/*
const fs = require("fs");
fs.copyFile("New.txt", "./copy/Second.txt", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("done");
  }
});
*/
/*
//unlink file
const fs = require("fs");
fs.unlink("New.txt", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("File Successfully Deleted");
  }
});
*/

/* rmdir used to reomve blank directory
const fs = require("fs");
fs.rmdir("./copy", function (err) {
  if (err) {
    console.log(err.message);
  } else {
    console.log(" Directory removed");
  }
});
*/
