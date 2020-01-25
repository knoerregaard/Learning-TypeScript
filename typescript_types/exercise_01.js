"use strict";
// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 01 – Basic Types
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈
Object.defineProperty(exports, "__esModule", { value: true });
// Objectives: 
// • Annotate primitive types, arrays, and 'any' types
var Types = /** @class */ (function () {
    function Types() {
    }
    // ======== Exercise 01.1 ========
    // Foreach method in this class
    // 1. For each parameter annotate the pritive types, arrays and 'any' types
    // 2. Implement
    // 2. Each method returns something. Annotate the return type og the method
    Types.prototype.Pi = function (pi) {
        //Returns the same floating value as the method recieve
        return pi;
    };
    Types.prototype.Age = function (age) {
        // Returns integers
    };
    Types.prototype.AgeBasedOnDate = function (date) {
        // Returns the caculated age from birth date
    };
    Types.prototype.Name = function () {
        // Returns the characters
    };
    Types.prototype.Date = function (date) {
        //Returns a specific date
    };
    Types.prototype.NegativeZero = function (negativeNumber) {
        // Returns a negative number
    };
    Types.prototype.ActuallyNumber = function (char) {
        // Returns the global property property 'NaN'
    };
    Types.prototype.LargestNumber = function (largest) {
        // Returns the global property property 'MAX_VALUE'
    };
    Types.prototype.MostBiglyNumber = function (inf) {
        // Returns and infinit number
    };
    Types.prototype.Fruits = function (Fruits) {
        // Returns a list of fruits
    };
    Types.prototype.StringAndNumbers = function (stringAndNum) {
        // Returns a list of mixed strings and numbers
    };
    Types.prototype.Members = function (members) {
        //Returns an object consiting of members
    };
    return Types;
}());
exports.Types = Types;
exports.types = new Types();
