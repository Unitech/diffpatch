
var jsondiffpatch = require('jsondiffpatch');
var fs = require('fs');


var old = JSON.parse(fs.readFileSync('./sample.json').toString());
var new_dt = JSON.parse(fs.readFileSync('./sample2.json').toString());

//console.dir(new_dt);
var delta = jsondiffpatch.diff(old, new_dt);


// patch original
//console.log(old);
console.log(JSON.stringify(delta), JSON.stringify(delta).length, JSON.stringify(old).length);

jsondiffpatch.patch(old, delta);

console.log(old);

// reverse diff
var reverseDelta = jsondiffpatch.reverse(delta);
// also country2 can be return to original value with: jsondiffpatch.unpatch(country2, delta);

// var delta2 = jsondiffpatch.diff(old, country2);
