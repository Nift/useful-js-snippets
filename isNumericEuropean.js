//Check if a given input is numeric
//Source: http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric

export default function isNumeric(n) {
  n = n.replace(/,/,".");
  return !isNaN(parseFloat(n)) && isFinite(n);
}
