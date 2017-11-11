var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/venplore");

var db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
})

db.on("open", function() {
  console.log("mongoose connected successfully");
})

var adventures = mongoose.Schema({
  Name: String,
  Category: String,
  Cost: Number,
  Effort: Number,
  Duration: Number,
  Outdoorsey: Number, 
})

var Adventure = mongoose.model("Adventure", adventures);

var addAdventure = function(name, category, cost, effort, duration, outdoorsey){
  console.log('calling properly');
  var adventure = new Adventure({
    Name: name,
    Category: category,
    Cost: cost,
    Effort: effort,
    Duration: duration,
    Outdoorsey: outdoorsey
  })
  adventure.save();
};

var existing = function(name) {
  
}

module.exports.addAdventure = addAdventure;