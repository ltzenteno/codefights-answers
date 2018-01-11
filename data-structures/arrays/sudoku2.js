//TODO refactor and optimize code

const grid =
  [ [".",".",".","2",".",".","6",".","."],
    [".",".",".","1",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".","5",".","1",".",".","8"],
    [".","3",".",".",".",".",".",".","."],
    [".",".",".","9",".",".",".",".","3"],
    ["4",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".","3","8","."],
    [".",".",".",".",".",".",".",".","4"]];

function sudoku2(grid){
  //there must be 9 subgrids
  let sub1;
  let sub2;
  let sub3;
  let aux;

  for(let l=0;l<grid.length;l++){
    sub1 = [];
    sub2 = [];
    sub3 = [];

    if(l === 0 || l === 3 || l === 6){
      aux = [];
      if(!createSubGrid(grid, aux, sub1, l, 0)) return false;
      aux = [];
      if(!createSubGrid(grid, aux, sub2, l, 3)) return false;
      aux = [];
      if(!createSubGrid(grid, aux, sub3, l, 6)) return false;
    }
  }

  let arr = [];
  for(let x=0;x<grid.length;x++){
    //here I check row
    if(!isUnique(grid[x]))
      return false;

    arr = [];
    for(let y=0;y<grid.length;y++){
      //here I check column
      arr.push(grid[y][x]);
    }
    if(!isUnique(arr))
      return false;
  }
  return true;
}

function createSubGrid(grid, aux, list, x, y){
  list.unshift(grid[x][y]);
  list.unshift(grid[x+1][y]);
  list.unshift(grid[x+2][y]);

  list.unshift(grid[x][y+1]);
  list.unshift(grid[x+1][y+1]);
  list.unshift(grid[x+2][y+1]);

  list.unshift(grid[x][y+2]);
  list.unshift(grid[x+1][y+2]);
  list.unshift(grid[x+2][y+2]);

  //validate if subgrid has repeated numbers
  for(let i=0;i<list.length;i++){
    if(list[i] !== '.'){
      if(aux.indexOf(list[i]) === -1){
        aux.push(list[i]);
      }else{
        return false;
      }
    }
  }
  return true;
}

function isUnique(list){
  let v = [];
  for(let i=0;i<list.length;i++){
    if(list[i] === '.') {
      v.push(list[i]);
    }else {
      if (v.indexOf(list[i]) === -1) {
        v.push(list[i]);
      } else {
        //it is repeated
        return false;
      }
    }
  }
  return true;
}

// test
console.log(sudoku2(grid));
