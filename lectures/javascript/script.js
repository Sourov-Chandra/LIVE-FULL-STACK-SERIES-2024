
// // for...of loop (used for array elements)
// const fruits = ['apple', 'banana', 'orange'];
// console.log('\nfor...of loop with an array:');
// for (const fruit of fruits) {
//   console.log(fruit);
// } 



// 6. toPrecision() - formats a number to a specified length
// const num = 5.6789;
// console.log(num.toPrecision(3));  // "5.68"

// 8. valueOf() - returns the primitive value of a Number object
// const numObj = new Number(42);
// console.log(numObj.valueOf());  // 42


// Spread Operator

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combinedArray = [12, 11, 29, ...arr1];
// console.log(combinedArray);  // Output: [12, 11, 29, 1, 2, 3]

// Rest Parameters
let a = [1, 2, 3, 4, 5, 16];
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  console.log(sum(...a));  // Output: 31    







