let fs = require('fs');
let arg = process.argv;

fs.readFile(arg[3], 'utf-8', function(err, data) {
  if (err) {
    console.error(err)
  }

  const inputText = data.toString();
  let outputText;

  if (arg[2] === 'encode') {
    outputText = encode(inputText)
  } else if (arg[2] === 'decode') {
    outputText = decode(inputText)
  } else {
    console.error("некорректное имя функции")
  }

  fs.writeFile(arg[4], outputText, 'utf-8', function(err){
    if (err) {
      console.error(err)
    }

    if (arg[2] === 'encode') {
      console.log('Коэффициент сжатия: ' + outputText.length / inputText.length )
    }
  })
})

function encode(input) {
  let result = ''
  let i = 0 
  let n = 1

  while (i < input.length) {
    while (input[i] === input[i + n] && n < 255) {
      n++
    }

    if (n > 3 || input[i] === '#') {
      result += '#' + String.fromCharCode(n) + input[i]
    } else {
      result += Array(n).fill(input[i]).join('')
    }
    

    i += n
    n = 1
  }

  return result
}

function decode(input) {
  let result = ''
  let i = 0

  while (i < input.length) {
    if (input[i] === '#') {
      result += Array(input.charCodeAt(i+1)).fill(input[i+2]).join('')
      i += 3
    } else {
      result += input[i] 
      i++ 
    }
  }

  return result
}

