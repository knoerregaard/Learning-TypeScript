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
This chapter is heavily influenced by the TypeScript documentation. Please refer to this documentation for detail: https://www.typescriptlang.org/docs/handbook/classes.html.

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

Typescript supports getters and setters as a way intercept the access to the members of a class. This allows for at more detailed controll over how members are accessed. 

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


