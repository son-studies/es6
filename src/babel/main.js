"use strict";

// Antes do ES6
function test(valueA) {
    var valueB = arguments.length < 2 || arguments[1] === undefined ? 4 : arguments[1];

    return valueA + valueB;
}

console.log(test(2)); // 6

// com ES6

function testES6(valueA) {
    var valueB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    return valueA + valueB;
}

console.log(testES6(2)); // 6
