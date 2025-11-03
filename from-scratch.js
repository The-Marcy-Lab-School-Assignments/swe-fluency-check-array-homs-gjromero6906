// For all of the following problems, use an array higher order method to solve the problem.
// You should not use any for or while loops!
// For each section, we've provided some sample data for you to test your function with.

/* -------------------------------------------- */
/* --------------STRING PROBLEMS--------------- */
/* -------------------------------------------- */

const sampleWords = ['dog', 'blueberry', 'alabama', 'earth', 'football'];

// Problem 1
const printEveryWord = (words) => {
  words.forEach(word => console.log(word));
};
// Problem 2
const getStringLengths = (strings) => {
  let lengthOfString =[];
  strings.forEach(word =>lengthOfString.push(word.length));
  return lengthOfString;
};

// Problem 3
const sortWordsZtoA = (words) => {
  words.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });
  
};
/* -------------------------------------------- */
/* --------------NUMBER PROBLEMS--------------- */
/* -------------------------------------------- */

const sampleNumbers = [7, 3, 9, 1, 4, 8, 2, 10, 5, 6];

// Problem 4
const getEvenNumbers = (nums) => {
  return nums.filter(num => num %2 ===0);
};

// Problem 5
const getLargestNumber = (numbers) => {
  let largest = -Infinity
  numbers.forEach(num =>{
    if(num>largest){
      largest = num;
    }
  } )
  return largest;
};
/* -------------------------------------------------- */
/* --------------OBJECT ARRAY PROBLEMS--------------- */
/* -------------------------------------------------- */

const sampleUsers = [
  { name: 'Charlie', isActive: true, age: 18, score: 80 },
  { name: 'Edward', isActive: true, age: 30, score: 60 },
  { name: 'Bob', isActive: true, age: 25, score: 90 },
  { name: 'Diana', isActive: false, age: 35, score: 70 },
  { name: 'Alice', isActive: false, age: 28, score: 100 },
];

// Problem 6
const printUserNamesAndScores = (users) => {
  users.forEach(user =>console.log(`${user.name} scored ${user.score} points.`));
};

// Problem 7
const getUserNames = (users) => {
 let names = [];
 users.forEach(user => names.push(user.name));
 return names;
};


// Problem 8
const getActiveUsersUnder30 = (users) => {
  let requirementsAcived =[];
  users.forEach(user =>{
    if(user.age<30 && user.isActive){
      requirementsAcived.push(user);
    }}
  )
  return requirementsAcived;
};


// Problem 9
const getTotalScore = (users) => {
  return users.reduce((total,user)=>total+user.score,0);
};
// Expected Output: 400
// Problem 10
const sortUsersByScoreDescending = (users) => {
  return users.sort((a,b)=>{
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    return 0;
  })
};