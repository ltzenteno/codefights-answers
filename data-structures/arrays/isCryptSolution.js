// word1 + word2 = word3
// It is guaranteed that solution only contains entries for the
// letters present in crypt and that different letters have different values.
const crypt = ["A", "A", "AA"];

const solution =
  [['A', '0'],
    ['B', '1'],
    ['C', '2'],
    ['D', '9']];

function isCryptSolution(crypt, solution){
  const numbers = [];
  let charList = [];
  let wordNumber = '';
  let digit;
  crypt.forEach(word => {
    charList = word.split('');
    wordNumber = '';
    for(let i=0;i<charList.length;i++){
      digit = solution.find(item => {
        return item[0] === charList[i];
      });
      wordNumber += digit[1];
    }
    numbers.push(wordNumber);
  });

  for(let k=0;k<numbers.length;k++){
    // it is invalid because it starts with '0..'
    if(numbers[k].length > 1 && numbers[k].startsWith('0')) return false;
  }

  // once I have the string representation of the numbers, I parse them and solve the equation
  return (parseInt(numbers[0]) + parseInt(numbers[1]) === parseInt(numbers[2]));
}


console.log(isCryptSolution(crypt, solution));
