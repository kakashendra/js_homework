fs = require('fs')
let alph = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"

let GetFrequencies = function (text) {
    let Table = []
    let count = 0;
    for (let j in text) {
        i = text[j].toLowerCase()
        if (!("\n\r !,./\\[]{};:\'\"()1234567890-=_+~`|*#@$%^&�?".includes(i))) {
            if (!Table[i]) Table[i] = 0
            Table[i]++
            count++
        }
    }
    for (let i in Table) Table[i] /= count
    return Table
}


let textInput = fs.readFileSync("input.txt", "utf-8").toLowerCase()
console.log(textInput)
let myStep = 21
let codedText = ''
for (let i in textInput) {
    if (!"\n\r/,.;\':\"[]{}|!@#$%^&*()_+1234567890-= ".includes(textInput[i]) )
        codedText += alph[alph.indexOf(textInput[i]) + myStep]
    else
        codedText += textInput[i]
}
fs.writeFileSync("Coded.txt", codedText, "utf-8")
console.log("CODE: ",codedText, myStep)


textReal = fs.readFileSync("WarAndPeace.txt", "utf-8")
RealTable = GetFrequencies(textReal)

let list = []
for (let i in RealTable) list.push([RealTable[i], i])
list.sort()
list.reverse()
console.log(list)

let textCoded = fs.readFileSync("Coded.txt", "utf-8")
let tableCoded = GetFrequencies(textCoded)
let step = 0;
let indexSimilaritySmall = 1999999;
for (let i = 1; i < 26; i++) {
    let indexSimilarity = 0;
    for (let symbol in tableCoded) 
        indexSimilarity += Math.abs(tableCoded[symbol] - RealTable[alph[alph.indexOf(symbol) + i]])
    if (indexSimilarity < indexSimilaritySmall) {
        indexSimilaritySmall = indexSimilarity
        step = i
    }
}
let textOut = ''
for (let i in textCoded) {
    if (!"\n\r/,.;\':\"[]{}|!@#$%^&*()_+1234567890-= ".includes(textInput[i]))
        textOut += alph[alph.indexOf(textCoded[i]) + step]
    else
        textOut += textCoded[i]
}
console.log("DECODE: ", textOut, 26 - step)
fs.writeFileSync("decoded.txt", textOut, "utf-8")