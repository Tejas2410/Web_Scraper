//last ball Commentary
let request = require("request");
let cheerio = require("cheerio");
// input -> commentary page url 
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";
request(url,cb);
// intial content -> scrap 
// last ball commentry

// first ball commentary 
// automation -> browser
function cb(error,response,html){
    let cheerioSelector = cheerio.load(html);// html ko parse karega(readable structure)
    let element = cheerioSelector(".match-comment .d-flex.match-comment-padder.align-items-center .match-comment-long-text p");
    console.log(element.length)
    // console.log(element.html());
    // indexing 
    
    let text = cheerioSelector(element[0]).text();
    console.log(text);
    //  let lbc= element.text();
    //    console.log(lbc);
    
    

}
