// npm -> play store
// npm install cheerio
//npm install request
let request = require("request");
let cheerio = require("cheerio");

//console.log("before");
// async function
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results
request("https://www.google.com/",cb);
// response is superset -> body
function cb(error,response,body){//body -> html
// console.log(response);
// console.log("error",error);
let cheerioSelector = cheerio.load(body);
// element select 
let element = cheerioSelector("#SIvCob");
//html
console.log(element.text());
//text
console.log(element.html());
}
// console.log("After");