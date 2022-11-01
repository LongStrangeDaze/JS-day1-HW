//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

let findWords = () =>{
    for(let i = 0; i <= dog_names.length; i++){
        if (dog_string.includes(dog_names[i])){
            console.log("Matched " + dog_names[i])
            break
        }else{
            console.log("No Matches")
        }
    }   
};  
console.log(findWords(dog_string, dog_names))

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

function replaceEvens(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    arr.splice(i, 1, "even index");
  }
  return arr;
}
console.log(replaceEvens(arr));


//Exercise 1- https://www.codewars.com/kata/50654ddff44f800200000004
function mult(a, b) {
    return a * b
  }

// exercise 2- https://www.codewars.com/kata/57356c55867b9b7a60000bd7
function basicOp(operation, value1, value2)
{
  if (operation === '+') {
      return value1 + value2;
    } else if(operation === '-') {
      return value1 - value2;
    }  else if(operation === '*') {
      return value1 * value2;
    } else if(operation === '/'){
      return value1/value2;
    }
  }

