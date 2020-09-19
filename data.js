var $ = require('jQuery'); 
$("<h1>Include this using jquery</h1>").appendTo("body"); 

var jsdom = require('jsdom');
$ = require('jquery')(new jsdom.JSDOM().window);


console.log($("body").html());
console.log('test');
function getJson(){
    $.getJSON('https://raw.githubusercontent.com/2020PB/police-brutality/data_build/all-locations-v2.json', function(jsondata) {
    // JSON result in `data` variable
});
}
getJson();
msg();

