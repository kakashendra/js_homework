let fs = require('fs');

let code = fs.readFileSync("func.txt", "utf-8");
let codeLines = [];
prepareCode();
let flag = 0;
let values = [];
compilate();

code = fs.readFileSync("nod.txt", "utf-8");
prepareCode();
flag = 0;
values = [];
compilate();


function compilate() {
    findPointers();

    for (let i = 0; i < codeLines.length; i++) {
        let firstPosition = codeLines[i].indexOf("@");
        let lastPosition = codeLines[i].lastIndexOf("@");
        let valueName = codeLines[i].slice(firstPosition + 1, codeLines[i].indexOf(","));
        let number = Number(codeLines[i].slice(codeLines[i].indexOf(",") + 2));
        let nameOfSecondValue = codeLines[i].slice(lastPosition + 1, -1);

        if (!codeLines[i].startsWith("jg")) {
            flag = 0;
        }

        if (codeLines[i].startsWith("set")) {
            set(firstPosition, lastPosition, valueName, number, nameOfSecondValue);
        }
        else if (codeLines[i].startsWith("mul")) {
            mul(firstPosition, lastPosition, valueName, number, nameOfSecondValue);
        }
        else if (codeLines[i].startsWith("add")) {
            add(firstPosition, lastPosition, valueName, number, nameOfSecondValue);
        }
        else if (codeLines[i].startsWith("cmr")) {
            cmr(firstPosition, lastPosition, valueName, number, nameOfSecondValue);
        }
        else if (codeLines[i].startsWith("jg")) {
            if (flag == 1)
                i = values[codeLines[i].slice(codeLines[i].indexOf(":"), -1)];
            flag = 0;
        }
        else if (codeLines[i].startsWith("jump")) {
            i = values[codeLines[i].slice(codeLines[i].indexOf(":"), -1)];
        }
        else if (codeLines[i].startsWith("write")) {
            let valueName = codeLines[i].slice(codeLines[i].indexOf("@") + 1);
            console.log(values[valueName]);
        }
        else if (codeLines[i].startsWith("grt")) {
            grt(firstPosition, lastPosition, valueName, number, nameOfSecondValue);
        }
    }
}

function findPointers() {
    for (let i = 0; i < codeLines.length; i++) {
        if (codeLines[i].startsWith(":")) {
            let valueName = codeLines[i].slice(codeLines[i].indexOf(":"), -1);
            values[valueName] = i;
        }
    }
}

function set(firstPosition, lastPosition, valueName, number, nameOfSecondValue) {
    if (firstPosition == lastPosition)
        values[valueName] = number;
    else
        values[valueName] = value[nameOfSecondValue];
}

function mul(firstPosition, lastPosition, valueName, number, nameOfSecondValue) {
    if (firstPosition == lastPosition)
        values[valueName] = values[valueName] * number;
    else
        values[valueName] = values[valueName] * values[nameOfSecondValue];
}

function add(firstPosition, lastPosition, valueName, number, nameOfSecondValue) {
    if (firstPosition == lastPosition)
        values[valueName] = values[valueName] + number;
    else
        values[valueName] = values[valueName] + values[nameOfSecondValue];
}

function cmr(firstPosition, lastPosition, valueName, number, nameOfSecondValue) {
    if (firstPosition == lastPosition && values[valueName] == number)
            flag = 1;
    else if (values[valueName] == values[nameOfSecondValue])
            flag = 1;
}

function grt(firstPosition, lastPosition, valueName, number, nameOfSecondValue) {
    if (firstPosition == lastPosition && values[valueName] > number)
        flag = 1;
    else if (values[valueName] > values[nameOfSecondValue])
            flag = 1;
}

function prepareCode() {
    if (code.charCodeAt(0) == 0xFEFF)
        code = code.substring(1);

    codeLines = code.split('\n');
}