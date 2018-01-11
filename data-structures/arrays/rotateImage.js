const image = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function rotateImage(a){
  const rotatedList = [];
  for(let k=0;k<a.length;k++){
    let arr = [];
    for(let i=a.length-1;i>=0;i--){
      arr.push(a[i][k]);
    }
    rotatedList.push(arr);
  }
  return rotatedList;
}


console.log(rotateImage(image));
