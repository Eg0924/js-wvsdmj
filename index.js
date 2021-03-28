const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday'];

//Using the splice method to add elements
workDays.splice(5, 0, 'Saturday', 'Sunday');

console.log(workDays);

//Using splice to remove elements 
//Starting at index 1 to  index3
workDays.splice(1, 3);
console.log(workDays);


//  USING THE SHIFT method
//SHIFT METHOD REMOVES FIRST ITEM IN THE ARRAY

// This will remove "Monday"
workDays.shift();
console.log(workDays);

//  USING THE FILTER METHOD IN AN ARRAY
// THE FILTER METHOD CREATES AN ARRAY WITH ELEMENTS THAT PASS A TEST.

//This function will use the filter method to find words that start with the letter S 
const wordsThatStartWithS = workDays.filter(word => {
  return  word.charAt(0)==='S';
})
console.log(wordsThatStartWithS);

const newDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday'];


// This filter method will return all the elements that start with the letter T from the array "New Days"
const wordsWithT = newDays.filter(letter => {
  return letter.charAt(0) === 'T';
}) 
console.log(wordsWithT);