
function Node(freq, letter, used, code, father) {
    this.freq = freq; 
    this.letter = letter;
    this.used = used;
    this.code = code;
    this.father = father;
}

let str= 'brakadabra'

let tree = new Array()

let alph = new Object();

for (i = 0; i < str.length; i++) {
    if (alph[str.charAt(i)])
    alph[str.charAt(i)] ++;
else 
   alph[str.charAt(i)] = 1
}

for (let i in alph){
    console.log(i, alph[i])
    let n = new Node(alph[i], i, 0, "" , null);
    tree.push(n) 
}

for (let j=2; j <= tree.length; j+=2) {
    let lastElement = tree[tree.length-1];
    if ((lastElement.used === 0) && (tree[tree.length-j].used === 0)); {

        lastElement.used = 1;
        tree[tree.length-j].used = 1;

        let newElement = new Node(lastElement.freq + tree[tree.length-j].freq, lastElement.letter + tree[tree.length-j].letter , 1 , "" , null);
        tree.push(newElement);

        tree[tree.length-2].father = newElement;
        tree[tree.length-j - 1].father = newElement;

        }  
    }
console.log(tree)
tree.forEach((node) => console.log(JSON.stringify(node)));

// for (let i=1; i < 3; i++); {
//     for (let k = 0; k < 2; k++) {
//         if (tree[k].father === tree[tree.length-i]); {
//             tree[k].code += "0";
//             tree[tree.length-i-1].code += "1";
//             break;
//         }
//     }
// }


// if (tree[0].father == tree[tree.length-1-0]){
//     tree[0].code += "0"
//     tree[tree.length-2-0].code += "1"
// }
// if (tree[1].father == tree[tree.length-1-1]){
//     tree[1].code += "0"
//     tree[tree.length-2-1].code += "1"
// }
// console.log(tree)

// if (tree[2].father == tree[tree.length-2-1]){
//     tree[2].code += "0"
//     tree[tree.length-2-2].code += "1"
// }
// tree.forEach((node) => console.log(JSON.stringify(node)));

// for (let i=1; i < tree.length; i++); {
//     if (tree[i].father === tree[tree.length-i]); {
//         tree[i].code += "0";
//         tree[tree.length-i-1].code += "1";
//     }
// }
// console.log(tree)