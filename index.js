  var nextNumber = 0;
  
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  nextNumber++;
    return `Currently serving number ${nextNumber}`;  
}

function currentLine (katzDeliLine) {
  var resultArray = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var i = 0;
    while (i < katzDeliLine.length){
      resultArray.push(` ${i+1}. ${katzDeliLine[i]}`);
      i++;
    }
    return `The line is currently:${resultArray}`; 
  }
}