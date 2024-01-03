const str = 'abraKadabra'
const alph = new Array();
for(i = 0; i < str.length; i++){
    console.log(str.charAt(i) = 0)
}
for(i = 0; i < str.length; i++){
    console.log(str.charAt(i)++)
}
for(const i = 0; i < str.length; i++){
     if (alph[str.charAt(i)])//== undefined можно не писать
         alph[str.charAt(i)] ++;
    else 
        alph[str.charAt(i)] = 1
}

const power = 0;

for (let i in alph){
    console.log(i)
    power++;
    alpf[i] /= str. length;
}

alph.a = 'abc'
console.log(power) 

// let entropy = 0
// if (power > 1)

const entropy = 0;
for(const i in alph){
    entropy -= alph[i] * Math.log(alph[i]) / Math.log(power);
}
entropy /= Math.log(power); 
console.log(alph)
