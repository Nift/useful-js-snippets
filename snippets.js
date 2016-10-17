
//Check if a given input is numeric
//Source: http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//If isNaN is not available
function IsNumeric(input){
    return (input - 0) == input && (''+input).trim().length > 0;
}