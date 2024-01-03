let num = parseFloat(process.argv[2]);
if (!isNaN(num)) 
{
  let floatBinary = numToFloatBinary(num);
  console.log(floatBinary);
}  
else console.log("Incorrect input, NaN");

function numToFloatBinary(num) 
{
  sign = num < 0 ? '1' : '0';
  absNumber = Math.abs(num);
  exponent = Math.floor(Math.log2(absNumber));
  mantissa = absNumber / Math.pow(2, exponent) - 1;
  exponent += 127;
  return sign + 
    exponent.toString(2).padStart(8, '0') +
    mantissa.toString(2).substring(2).padEnd(23, '0');
}