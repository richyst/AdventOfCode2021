"use strict";
exports.__esModule = true;
var input_1 = require("./input");
var smallSample = [
    'forward 5',
    'down 5',
    'forward 8',
    'up 3',
    'down 8',
    'forward 2'
];
var horizontal = 0;
var depth = 0;
var aim = 0;
input_1["default"].forEach(function (movement) {
    var _a = movement.split(' '), direction = _a[0], amountStr = _a[1];
    var amount = parseInt(amountStr);
    switch (direction) {
        case 'forward':
            horizontal += amount;
            depth += amount * aim;
            break;
        case 'down':
            aim += amount;
            break;
        case 'up':
            aim -= amount;
            break;
    }
});
console.log("Depth = ".concat(depth, " x Horizontal= ").concat(horizontal, " = ").concat(horizontal * depth));
