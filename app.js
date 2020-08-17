//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();

//still able to assign new although its const.
const items = [];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
//app.use(bodyParser.json());

app.get("/", function(req, res) {
  //res.write("<h2>hi</h2>");
  let day = date.getDate();

  res.render("list", {
    listTitle: day,
    newListItem: items
  });

});

app.post("/", function(req, res) {
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItem: workItems
  });
})

app.get("/about", function(req, res) {
  res.render("about");
});


let port = process.env.PORT;

if(port == null || port == ""){
  port = 3000;
}

app.listen(port, function() {
  console.log("server started on port 3000");
});
