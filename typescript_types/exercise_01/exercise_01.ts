// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 01 – Basic Types
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives: 
// • Annotate primitive types, arrays, and 'any' types

export class Types{
    // ======== Exercise 01.1 ========
    // Foreach method in this class
    // 1. For each parameter annotate the pritive types, arrays and 'any' types
    // 2. Implement
    // 2. Each method returns something. Annotate the return type og the method

    public Pi (pi: Number) : Number{
        //Returns the same floating value as the method recieve
        return pi;
    } 

    Age (age) {
        // Returns integers

    }

    AgeBasedOnDate(date){
        // Returns the caculated age from birth date

    }
    Name(){
        // Returns the characters
    }

    Date(date){
        //Returns a specific date
    }
    
    NegativeZero(negativeNumber){
        // Returns a negative number
    }

    ActuallyNumber(char){
        // Returns the global property property 'NaN'
    }

    LargestNumber(largest){
        // Returns the global property property 'MAX_VALUE'
    }
    MostBiglyNumber(inf){
        // Returns and infinit number
    }

    Fruits(Fruits){
        // Returns a list of fruits
    }

    StringAndNumbers(stringAndNum){
        // Returns a list of mixed strings and numbers
    }

    Members(members){
        //Returns an object consiting of members
    }
}

export const types = new Types();