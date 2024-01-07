// masala 1

// function getSum(n) {
//   let result = 0;
//   for (let i = 1; i < n; i++) {
//     result += (2 * i - 1) * (2 * i);
//   }
//   return result;
// }

// let natija = getSum(3);
// console.log(natija);

// masala 2


// let arr = [1589, 31851, 512, 180975, 78];

// const getHighestNumberOfDigits = (arr) => arr.sort((a, b) => b.toString().length - a.toString().length)[0];

// console.log(getHighestNumberOfDigits(arr));

// masala 3


// let arr = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}];


// const getStringArr = (arr) => {
//     let res = [];
//     for (const el of arr ) {
//         if (typeof el === 'string') {
//             res.push(el);
//         }
//     }
//     return res;
// }

// console.log(getStringArr(arr));



// let str = "Hello! How are you? I'm doing great. What's new?";




// function getPunctuationNumber(str) {
//     const punctuationSigns = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', "'"];
    
//     const punctuationMatches = str.split('').filter(char => punctuationSigns.includes(char));
    
//     return punctuationMatches.length;
// }
// let result = getPunctuationNumber(str);
// console.log(result); 


// function switchLetters(str) {
//   const switchedStr = str
//     .split("")
//     .map((char) => {
//       if (char === char.toUpperCase()) {
//         return char.toLowerCase();
//       } else if (char === char.toLowerCase()) {
//         return char.toUpperCase();
//       } else {
//         return char;
//       }
//     })
//     .join("");

//   return switchedStr;
// }

// let str = "Abdulaziz Programmer";
// let result = switchLetters(str);
// console.log(result);

// masala 7

// function seperateStudents(students) {
//   let grantStudents = [];
//   let contractStudents = [];

//   for (let i = 0; i < students.length; i++) {
//     if (students[i].isGrant) {
//       grantStudents.push(students[i]);
//     } else {
//       contractStudents.push(students[i]);
//     }
//   }

//   console.log("Grant Students:");
//   console.log(grantStudents);

//   console.log("\nContract Students:");
//   console.log(contractStudents);
// }

// let students = [
//   { name: "Jurabek", isGrant: false },
//   { name: "Elbek", isGrant: true },
//   { name: "Shamshod", isGrant: false },
//   { name: "Kamola", isGrant: false },
//   { name: "Gulnoza", isGrant: true },
//   { name: "Savlatbek", isGrant: false },
// ];

// seperateStudents(students);


function getTotalPages(books) {
  let totalPages = 0;

  for (let i = 0; i < books.length; i++) {
    if (books[i].isReadFinished) {
      totalPages += books[i].pages;
    }
  }

  return totalPages;
}

const books = [
  { name: "The Great Gatsby", pages: 180, isReadFinished: true },
  { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
  { name: "Atom habits", pages: 328, isReadFinished: true },
  { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
  { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
  { name: "The Hobbit", pages: 310, isReadFinished: false },
  { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
  { name: "Harry Potter", pages: 320, isReadFinished: true },
  { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
  { name: "To the Lighthouse", pages: 209, isReadFinished: true },
];

const totalReadPages = getTotalPages(books);
console.log("Jami o'qilgan sahifalar soni:", totalReadPages);









