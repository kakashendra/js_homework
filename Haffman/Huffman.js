fs = require('fs')
text = fs.readFileSync("input.txt", "utf-8");
masiv = [];
symbols = [];
console.log(text)
for (var i = 0; i < text.length; i++) {
    if (!symbols[text[i]])
        symbols[text[i]] = 0;
    symbols[text[i]]++;
}
arr = [];
for (i in symbols) {
    arr.push([symbols[i], i]);
}

arr.sort();
list = [];
for (var i = 0; i < arr.length; i++) list[arr[i][1]] = "";

while (arr.length > 1) {
    arr.sort(function (a, b) {
        if (a[0] === b[0]) return 0;        
        return (a[0] < b[0]) ? -1 : 1;        
    });
    for (i = 0; i < arr[0][1].length; i++) list[arr[0][1][i]] = '0' + list[arr[0][1][i]];    
    for (i = 0; i < arr[1][1].length; i++) list[arr[1][1][i]] = '1' + list[arr[1][1][i]];
    arr[1][1] += arr[0][1];
    arr[1][0] += arr[0][0];
    arr = arr.slice(1);   
}
for (i in list) 
    console.log(i, list[i], "in text:", symbols[i])
