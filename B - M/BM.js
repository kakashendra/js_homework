let fs = require('fs');
let text = fs.readFileSync('don.txt', 'utf-8');
let substring = "казаки";
let entry = new Array();
let table = new Map();
for (let i = 0; i < substring.length; i ++){
    table.set(substring[i], i);
}


let start = new Date();
for (let i = 0; i < text.length; i ++){
    if (table.has(text[i + substring.length - 1])){
        i += substring.length - table.get(text[i + substring.length - 1]) - 1;
        if (text.substr(i, substring.length) == substring){
            entry.push(i);
        }
    }
    else{
        i += substring.length - 1;
    }
}
let finish = new Date();
console.log("Runtime: ", finish - start);
console.log(entry.slice(0, 10), entry.length);

let startBF = new Date();
function BruteForce(text, substring){
	let count = 0;
    let arr = new Array();
    for (let i = 0; i < text.length; i++){
        let count = 0;
            for (let j = 0; j < substring.length; j++){
                if (text[i + j] === substring[j])
                    count++;
            }
        if (count === substring.length) arr.push(i)
        count = 0;
    }
    return arr;
}
let resBF = BruteForce(text, substring);
let finishBF = new Date(); 
console.log("Runtime: ", finishBF - startBF);
console.log("BF: ", resBF.slice(0, 10), resBF.length);