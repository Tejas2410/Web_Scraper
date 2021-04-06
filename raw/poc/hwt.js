//highest wicket taker
let request = require("request");
let cheerio = require("cheerio");
// input -> commentary page url 
let url = " https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
request(url , cb);

function cb(error,response,html){
    let chSelector = cheerio.load(html);
    let tables = chSelector(".table.bowler");
     // console.log(tables.length);  

    //let bowlerHtmlString = "";
    let hwicket = 0;
    let hwicname = "";
    for(let i = 0; i < tables.length; i++ ){
        //bowlerHtmlString += chSelector(tables[i]).html();
        //html //text // find
        // find function find an element inside an element
        let teambowler = chSelector(tables[i]).find("tr");
        
        for(let j = 0; j < teambowler.length; j++ ){
            // let bolHtml = chSelector(teamBowlers[j]).text();// row k andar ka data
            let eachBowlerCol = chSelector(teambowler[j]).find("td");

            let bowler = chSelector(eachBowlerCol[0]).text();
            let wicket = chSelector(eachBowlerCol[4]).text();

            if(hwicket <= Number(wicket)){// wicket was in text format
                hwicket = wicket;
                hwicname = bowler;
            }

            console.log(bowler,"    ",wicket);
            // console.log(bolHtml);
            // tr -> name ,wickets column

            // compare
        }
        console.log("''''''''''''''''''''''''''''");

        // innings bowler table-> 2
        //  get bowler name wickets
        // compare the wicket get the highest wicket taker
    }
    console.log(hwicname,"    ",hwicket);

    //console.log(bowlerHtmlString);
}


