//jshint esversion:6
//module.exports.getDate = function () {
exports.getDate = function () {

  const today = new Date();
  //var currentDay = today.getDay();
  //res.sendFile(__dirname+"/index.html");

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return today.toLocaleDateString("en-US", options); //4/28/2020
}


module.exports.getDay =getDay;

function getDay() {

  const today = new Date();
  //var currentDay = today.getDay();
  //res.sendFile(__dirname+"/index.html");

  const options = {
    day: "numeric"
  };

  const day = today.toLocaleDateString("en-US", options); //4/28/2020
  console.log(today.toLocaleDateString("en-US", options));
  console.log(today.toDateString("ko-KR", options));
  //console.log(today.toDateString("zh-CN",options));

  return day;
}

//console.log(module.exports);
