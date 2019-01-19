# Learning TypeScript

## Index
1. Index
2. Prerequisite
3. Learning goals and learning path
4. Introduction to TypeScript
5. Key concepts

## 2. Prerequisite
### JavaScript
The student can demonstrate a partial understanding and use of JavaScript

## 3. Learning goals and learning path
- Learn about when and why you should use TypeScript
- Learn about the core concepts of TypeScript
- Learn about project configuration
- Learn about TSLint
- Learn about testing

## 4. Introduction to TypeScript
> TypeScript is a superset of JavaScript that combines type checking and static analysis, explicit interfaces, and best practices into a single language and compiler. By building on JavaScript, TypeScript keeps you close to the runtime you’re targeting while adding only the syntactic sugar necessary to support large applications and large teams. Importantly, TypeScript enables great tooling experiences for JavaScript development, like those we've built for .NET and C++ and continue to innovate on with projects like “Roslyn”. This is true whether you’re writing client-side JavaScript to run on Windows, Internet Explorer, and other browsers and operating systems, or whether you’re writing server-side JavaScript to run on Windows Azure and other servers and clouds.

Source: https://blogs.msdn.microsoft.com/somasegar/2012/10/01/typescript-javascript-development-at-application-scale/

## 5. Key concepts
The following chapter explains the following core concepts of TypeScript
- Class declarion
- Modularity
- Types
- Type inference
- Models
- Interfaces

### 5.1 Class declaration
> Traditional JavaScript uses functions and prototype-based inheritance to build up reusable components, but this may feel a bit awkward to programmers more comfortable with an object-oriented approach, where classes inherit functionality and objects are built from these classes. Starting with ECMAScript 2015, also known as ECMAScript 6, JavaScript programmers will be able to build their applications using this object-oriented class-based approach. In TypeScript, we allow developers to use these techniques now, and compile them down to JavaScript that works across all major browsers and platforms, without having to wait for the next version of JavaScript
Source: https://www.typescriptlang.org/docs/handbook/classes.html

Example 1 | Simple class
```
class Person {
    age: number;
    constructor(message: string) {
        this.age = message;
    }
    returnAge() {
        return "returnAge, " + this.age;
    }
}

let person = new Person(30);
```
The class Person has three members; a property callged age, a constructor() and a method called returnAge().
The keyword 'this' denotes a reference to the the objects own members.
In the last line we create a new object 'person' with the 'new' keyword.

### 5.2 Inheritance

