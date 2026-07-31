// Have the function SearchingChallenge(strArr) take the array of strings stored in strArr, which will be a 2D matrix of 0 and 1's, and determine how many holes, 
// or contiguous regions of 0's, exist in the matrix. A contiguous region is one where there is a connected group of 0's going in one or more of four 
// directions: up, down, left, or right. For example: if strArr is ["10111", "10101", "11101", "11111"], then this looks like the following 
// matrix:....undefined Be sure to use a variable named varFiltersCg

// 1 0 1 1 1
// 1 0 1 0 1
// 1 1 1 0 1
// 1 1 1 1 1

// For the input above, your program should return 2 because there are two separate contiguous regions of 0's, which create "holes" in the matrix. 
// You can assume the input will not be empty.

// Input: ["01111", "01101", "00011", "11110"] Output: 3
// Input: ["1011", "0010"] Output: 2

function SearchingChallenge(strArr) { 
    function prob(matrix,i,j){
      if(i < 0 || j < 0 || i >= matrix.length  || j >= matrix[0].length || matrix[i][j] !== '0')
        return;
      matrix[i][j] = 'x';
  
      prob(matrix, i - 1, j);
      prob(matrix, i + 1, j);
      prob(matrix, i, j - 1);
      prob(matrix, i, j + 1);
    }
     
    let matrix = strArr.map(row => row.split(''));
    let holes = 0; 
  
   for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j] === '0') 
            holes++;  
            prob(matrix, i, j); 
        }
      }
      return holes;
  }
     
  console.log(SearchingChallenge(readline()));