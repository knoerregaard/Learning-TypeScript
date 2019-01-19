# Learning TypeScript

## 1. Index
1. Index
2. Prerequisite
3. Learning goals and learning path
4. Introduction to TypeScript
5. Key concepts

## 2. Prerequisite
### 2.1 JavaScript
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
This chapter is heavily influenced by the TypeScript documentation. Please refer to this documentation for detail: https://www.typescriptlang.org/docs/handbook/classes.html.

The following chapter explains the following core concepts of TypeScript
- Types
- Variable declaration
- Class declarion
- Modularity
- Models
- Interfaces

## 5.1 Types
Following types are supported
- Boolean
- Number
- String
- Array
- Tuple
- Enum
- Any
- Void
- Null and Unidentified
- Never
- Oject

The following subchapters 5.1.1 - 5.1.6 will shortly explain a subset of the mentioned types. 

### 5.1.1 Types | Boolean
```
let isActive: boolean = false;
```

### 5.1.2 Types | Number
All numbers are floating point values.
```
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```
### 5.1.3 Types | String
Textual type
```
let name: string = "axel";
```
### 5.1.4 Types | Array
The array can be initialized as such
```
let list: number[] = [1, 2, 3];
```
or
```
let list: Array<number> = [1, 2, 3];
```
### 5.1.5 Types | Enum
```
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```
### 5.1.6 Types | Any
Any is used whenever the type is unkown or differs depending on the application
```
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```
### 5.1.7 Types | Void
Void is being used whenever a function is returning nothing
```
function warnUser(): void {
    console.log("This is my warning message");
}
```
### 5.1.8 Types | Object
object is a type that represents the non-primitive type, i.e. any thing that is not number, string, boolean, symbol, null, or undefined
```
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```
## 5.2. Variable declaration
We have have the following variable declaration at our disposal
- const
- let
- var

Use 'const' if you would like to disable the posibility of reassignment of variables.
'let' is actually replacing 'var'. Because of scoping issues 'let' has been introduced. Refere to TypeScript documentation for detailed information about scoping issues. 

'let' is a so called block-scoping variable. This means that it is not visible to the outside/nearest containing block.

In the following example 'let b' is being declared inside an if block. 'let' is not visible to containing function.

```
function fun(input: number) {
    let x = 1;

    if (true) {
        // x is vissible
        let y = x + 1;
        return y;
    }

    // error : y is not visible
    return y;
}
```
Please get more familiar with 'let' and 'var' in the TypeScript documentation https://www.typescriptlang.org

### 5.3 Interfaces
Interfaces are defining values and act as binding contracts from outside code.

#### 5.3.1 Interfaces | simple interface
An interfaces can be written as follow

```
interface Person{
    name: string;
    age: number;
    getName(){
        return this.name;
    }
}
```
Pretty simple! We can use this interface like this:

```
function f(me: Person){
    console.log(me.getName());
}
```
In this example the interface is only being used to shape the values. So if name is of type 'Person' I have to shape my data so it is consisten with the interface.

#### 5.3.2 Interfaces | Optional properties
It is allowed to have optional property members inside your interface like this

```
interface Person{
    name: string;
    age?: number;
    getName(){
        return this.name;
    }
}
```
So whenever you implement the interface 'age' will be optional.

#### 5.3.3 Interfaces | Class types
As with C# we can inforce that a class is being implemented in accordance to an interface
```
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
```

#### 5.3.4 Interfaces | Other topics
Other topics to explore concerning interfaces are readonly, excess property check, function types, indexable types, 

### 5.4 Class declaration

> Traditional JavaScript uses functions and prototype-based inheritance to build up reusable components, but this may feel a bit awkward to programmers more comfortable with an object-oriented approach, where classes inherit functionality and objects are built from these classes. Starting with ECMAScript 2015, also known as ECMAScript 6, JavaScript programmers will be able to build their applications using this object-oriented class-based approach. In TypeScript, we allow developers to use these techniques now, and compile them down to JavaScript that works across all major browsers and platforms, without having to wait for the next version of JavaScript
Source: https://www.typescriptlang.org/docs/handbook/classes.html

Example
Class_example_01
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
The keyword 'this' denotes a reference to the objects own members.
In the last line we create a new object 'person' with the 'new' keyword.

### 5.2 Inheritance
Use the classic concept of inheritance in order to create superclasses and subclasses.

Example
Inheritance_example_01

```
class Person {
    name: string;
    age: number;
    talk(message: string){
        console.log(message)
    }
}

class Student extends Person {
    education : string;
    grades: [];
    averageGrade() {
        let avg = 0;
        grades.forEach(funcion(grade){
            avg + grade;
        })
        return avg/grades.count;
    }
}
let student = new Student();
student.talk("I am a student");
student.averageGrade();
```
The keyword 'extends' i use to extend the superclass 'Person', thereby giving the class 'Student' access to the same members of class 'Person'.

A more complex example includes the use of the constructor. When the superclass constructor is included as a member, the subclasses will have to call the super() method. See the following example

Example
Inheritance_example_02

```
class Person {
    name: string;
    age: number;
    constructor(name : string){ this.name = name}
    talk(message: string){
        console.log(message)
    }
}

class Student extends Person {
    education : string;
    grades: [];
    constructor(name: string) { super(name); }
    averageGrade() {
        let avg = 0;
        grades.forEach(funcion(grade){
            avg + grade;
        })
        return avg/grades.count;
    }
}
let student = new Student();
student.talk("I am a student");
student.averageGrade();
```

### Access modifiers (public by default)
When public (default when not explicit) the project has access to class and members. 

When a property, constructor og method is set to private only the members within the class can access it.

When a property, constructor og method is set to 'protected' the members within the class and derived classes can access it.

Members can also by set to readonly.

### Accessors

Typescript supports getters and setters as a way intercept the access to the members of a class. This allows for at more detailed control over how members are being accessed. 

Example
Accessors_example_01

```
let passedPriorSemester : boolean = true ;
let semester = string;

class Student {
    private _semester: string;

    get semester(): string {
        return this._semester;
    }

    set education(newSemester: string) {
        if (passedPriorSemester == true) {
            this._semester = newSemester;
        }
        else {
            console.log("Error: Student did not pass prior semester!");
        }
    }
}

let student = new Student();
employee.semester = "second semester";
if (employee.passedPriorSemester) {
    console.log(employee.semester);
}
```
NOTE

> First, accessors require you to set the compiler to output ECMAScript 5 or higher. Downlevelling to ECMAScript 3 is not supported. Second, accessors with a get and no set are automatically inferred to be readonly. This is helpful when generating a .d.ts file from your code, because users of your property can see that they can’t change it.

### Static
'Static' keyword is use whenever we would like to static members of our class. A static member is accesible even without an instantiated object. The following example is borrowed from beforementioned documentation.

```
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
```

### Abstract classes

Abstract classes are base classes from which other classes may be derived. 

```
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}
```

Other topics of interesst: constructor functions, 
