
const average = (value, minnum, maxnum) => {
  var i = 0;
  var inputNumber = 0;
  var validNumber = 0;
  var sum = 0;
  var average;

  while (value[i] != -999 && inputNumber < 100) {
    inputNumber++;
    if (value[i] >= minnum && value[i] <= maxnum) {
      validNumber++;
      sum += value[i];
    } 
    else continue;
    i++;
  }

  if (validNumber > 0) {
    average = sum / validNumber;
  } else {
    average = -999;
  }

  return average;
};

module.exports = average;
