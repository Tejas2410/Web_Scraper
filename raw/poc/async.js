let fs = require("fs");

console.log("before");
// line bottle neck 
// files , db , image process -> background
// mean while i can do other 
// let content = fs.readFileSync("f1.html");
// read -> start and i will send it to someone else
// async function -> data , cb 
fs.readFile("h1.html", cb);
//nodejs -> error first callbacks
function cb(err,content){
    if(err){
        console.log("error", error);
    } else if(err == null){
        console.log("content =>", content+"");
    }
}
console.log("after");
console.log("other work");
// while (true) {

// }