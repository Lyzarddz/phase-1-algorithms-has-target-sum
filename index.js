function hasTargetSum(array, target) {
  // Write your algorithm here

  const value = new Map();      //creates an object with key and value pairs
  const len = array.length;      
                                    // declared len outside to make less complex
  for (let i =0; i < len; i++) {     // since in the "for" loop it would have to calculate the length every iteration 
                                   // if not delcared in a var ahead of time
      if(value[array[i]] >= 0){
        return true;
      }
      value[target - array[i]] = i; 
    }
      return false;
   
}

/* 
  Write the Big O time complexity of your function here
*/


//0(n)


/* 

  Add your pseudocode here
*/
//
// Iterates through array
// adds each element of array to every other element in array and return sum
// compare sum to target
// return true if the same 

/*

  Add written explanation of your solution here
*/

//using Map() to create an object with key and value pairs 
// and iterate through array 
//then take the pairs and subtract from eachother
//


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

console.log("Expecting: false");
console.log("=>", hasTargetSum([3, 6, 2, 9], 14));

console.log("Expecting: true");
console.log("=>", hasTargetSum([3, 5, 4, 10], 14));




  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
