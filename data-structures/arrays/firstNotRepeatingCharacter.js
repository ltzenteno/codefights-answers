const s = 'abacabad';

function firstNotRepeatingCharacters(s){
  const charList = s.split('');
  const obj = {};
  for(let i=0;i<charList.length;i++){
    if(obj.hasOwnProperty(charList[i])){
      obj[charList[i]].count++;
    }else{
      obj[charList[i]] = {key:charList[i], count:1};
    }
  }

  for(let prop in obj){
    if(obj[prop].count === 1)
      return obj[prop].key;
  }

  return '_';
}

console.log(firstNotRepeatingCharacters(s));
