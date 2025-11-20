//intsall npm i nodemon -g because it will auto restart server on changes.
const express = require("express");

const app = express();
/*app.get(Router, requestHandler) {

})*/

app.use(express.json()); //built in middleware to parse json data
app.use(express.urlencoded({ extended: true })); //built in middleware to parse urlencoded data

//middleware is a function that has access to request and response objects. its running first before the routes.

app.use(function (req, res, next) {
  console.log("middleware run ");
  next();
});

app.use(function (req, res, next) {
  console.log("Middleware run for second time");
  next();
});

//routes
app.get("/", function (req, res) {
  res.send("hellooooooo from express");
});

app.get("/profile", function (req, res, next) {
  return next(new Error("Something went wrong in profile route"));
});

//error handling middleware
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send("Something went wrong");
});

app.listen(3000);

//middleware is a function that has access to request and response objects.
