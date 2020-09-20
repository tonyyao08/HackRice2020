
const data = require('./location-data.json');

subdata=data.data;
var count = 0;
var keys = [];
var dates = [];
for(var myKey in subdata) {
    dates.push([JSON.stringify(subdata[myKey].date),count]);
    // console.log(JSON.stringify(subdata[myKey].date, null, 2));
    // console.log(JSON.stringify(subdata[myKey].city, null, 2));
    // console.log(JSON.stringify(subdata[myKey].name, null, 2));
    count++;
    
}


dates.sort();
// console.log(dates);
// dates are sorted
// console.log(dates[0][1]);
var combinedDates = [];
var index1 = 0;
var index2 = 1;
var complete = false;


while(index1 < dates.length && index2 < dates.length && complete == false){
    var date1 = dates[index1][0];
    var date2 = dates[index2][0];
    var datekeys = []; //combined keys
    datekeys.push(dates[index1][1]); // initial key
 
    while(date1 == date2){ //is date the same
        datekeys.push(dates[index2][1]); //add to datekeys
        index2++;
        if(index2 < dates.length){
            date2 = dates[index2][0];   
            
        } else{
            complete = true;
            break;
        }
    }
        combinedDates.push([date1,datekeys]);
        index1 = index2;
        index2++;
      
}

// var testdate = combinedDates[0][0];
// console.log(testdate);
// var testkeys = combinedDates[0][1];
// console.log(testkeys);
// for(var i = 0; i < testkeys.length; i++){
//     console.log(JSON.stringify(subdata[testkeys[i]].name, null, 2));
// }

for(var j = 0; j < combinedDates.length;j+=2){
    console.log(combinedDates[j][0]);
    // console.log(combinedDates[j][1]);
    console.log(subdata[j].state);
    console.log(subdata[j].city);
    console.log(subdata[j].description);
    for(var i=0; i<subdata[j].links.length; i++){
        console.log(subdata[j].links[i]);
    }
    
}
