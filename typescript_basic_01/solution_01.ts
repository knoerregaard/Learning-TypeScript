// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 01 – Basic Types
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives: 
// • Annotate primitive types, arrays, and 'any' types

export default () => {
    // ======== Exercise 01.1 ========
    // Annotate the following types
    
    let pi : string = '3.14159';
    let age : number = 25;
    let name : string = 'Hans Christian Andersen';
    let isActive : boolean = true;
    let born : Date = new Date();
    let negZero : number = -0;
    let actuallyNumber : number = NaN;
    let largestNumber : number = Number.MAX_VALUE;
    let mostBiglyNumber : number = Infinity;
    let fruits : string[] = ['apple', 'orange'];
    let stringsAndNumbers: (number | string)[] = [1, 'one', 2, 'two', 3, 'three'];
    let members : any = {
        born,
        negZero,
        largestNumber,
        fruits
    }

}
