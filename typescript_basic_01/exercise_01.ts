// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 01 – Basic Types
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives: 
// • Annotate primitive types, arrays, and 'any' types

export default () => {
    // ======== Exercise 01.1 ========
    // Annotate the following pritive types, arrays and 'any' types
     
    let pi = '3.14159';
    let age = '25';
    let name = 'Hans Christian Andersen';
    let isActive = true;
    let born = new Date();
    let negZero = -0;
    let actuallyNumber = NaN;
    let largestNumber = Number.MAX_VALUE;
    let mostBiglyNumber = Infinity;
    let fruits = ['apple', 'orange'];
    const stringsAndNumbers = [1, 'one', 2, 'two', 3, 'three'];
    let members = {
        born,
        negZero,
        largestNumber,
        fruits
    }
}