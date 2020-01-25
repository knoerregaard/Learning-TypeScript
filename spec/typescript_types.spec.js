"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exercise_01_1 = require("../typescript_types/exercise_01");
describe('calculate', function () {
    it('add', function () {
        var result = exercise_01_1.types.Pi(3.13);
        expect(result).toBe(3.13);
    });
});
