//Highest run scorer
let request = require("request");
let cheerio = require("cheerio");

let url = " https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
request(url , cb);

let hruns = 0;
let hrunsname= "";
function cb(error,response,html){
    let chSelector = cheerio.load(html);
    let tables = chSelector(".table.batsman");
    //let bowlerHtmlString = "";
    for(let i = 0; i < tables.length; i++ ){
        //html //text // find
        let teambatsman = chSelector(tables[i]).find("tr");
        for(let j = 0; j < teambatsman.length; j++ ){
            let eachBatsmanCol = chSelector(teambatsman[j]).find("td");
            if(eachBatsmanCol.length == 8){ 
            let batsman = chSelector(eachBatsmanCol[0]).text();
            let runs = chSelector(eachBatsmanCol[2]).text();

            if(hruns <= Number(runs)){
                hruns = runs;
                hrunsname = batsman;
            }
        
            console.log(batsman,"    ",runs);
         }
        }
        console.log("'''''''''''''''''''''''''''''''''''''''");
        // innings bowler table-> 2
        //  get bowler name wickets
        // compare the wicket get the highest wicket taker
    }
    console.log(hrunsname,"    ",hruns);

}
