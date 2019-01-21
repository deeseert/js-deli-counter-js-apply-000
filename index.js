var newArr = 0;

function takeANumber(line, name){
  newArr++;
  //line.push(name)
  return `Welcome, ${newArr}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line){
  let newArr = [];
  if (!line.length) {
    return "The line is currently empty."
  }else {
    for (var i = 0; i < line.length; i++) {
      newArr.push(newArr.length + 1 + ". " + line[i])
    }
  }
  return `The line is currently: ${newArr.join(', ')}`
}

//ticket num
