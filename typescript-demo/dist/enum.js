"use strict";
var directions;
(function (directions) {
    directions[directions["north"] = 0] = "north";
    directions[directions["south"] = 1] = "south";
    directions[directions["eash"] = 33] = "eash";
    directions[directions["west"] = 34] = "west";
})(directions || (directions = {}));
console.log(directions.eash);
