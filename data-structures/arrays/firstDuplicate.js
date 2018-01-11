const a = [2, 3, 3, 1, 5, 2];

function firstDuplicate(a){
  let obj = {};
  for(let i=0;i<a.length;i++){
    if(!obj.hasOwnProperty(a[i])){
      obj[a[i]] = a[i];
    }else{
      return a[i];
    }
  }
  return -1;
}

console.log(firstDuplicate(a));
