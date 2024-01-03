let str = require('fs').readFileSync('text.txt');
str = str.toString();

let alph = new Object();
let tree = new Array();

for (i = 0 ; i < str.length; i++) {
	if (!(str.charAt(i) in alph))
        alph[str.charAt(i)] = 0;
    alph[str.charAt(i)]++;
}

for(ch in alph) {
	let n = new Node(ch,undefined);
	tree.push(n);
}

tree.reverse();
let lastCode = "";
let encoded = new Object();
let len = tree.length;
first = tree.pop();
first.code = "0";
lastLetter = first.letter;
encoded[first.letter] = first.code;
lastCode = first.code;

for(i = 1;i < len; i++) {
	node = tree.pop();
	if (i == len - 1)
		node.code = '1' + lastCode.slice(0,-1);
	else
		node.code = "1" + lastCode;
    encoded[node.letter] = node.code;
	lastCode=node.code
}
let res = "";
for (i=0 ; i < str.length ; i++)
	res+=encoded[str[i]];
console.log(res);

function Node(letter, code) {
	this.letter=letter;
	this.code=code;
}
