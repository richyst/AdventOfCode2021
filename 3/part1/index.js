"use strict";
exports.__esModule = true;
var input_1 = require("./input");
var smallSample = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010'
];
var gamma = '';
var dataLength = input_1["default"][0].split('').length;
for (var i = 0; i < dataLength; i++) {
    var accu = 0;
    for (var j = 0; j < input_1["default"].length; j++) {
        if (input_1["default"][j].charAt(i) === '1')
            accu++;
    }
    if (accu > (input_1["default"].length / 2)) {
        gamma += '1';
    }
    else {
        gamma += '0';
    }
}
var epsilon = '';
gamma.split('').forEach(function (digit) {
    epsilon += digit === '1' ? '0' : '1';
});
var gammaInt = parseInt(gamma, 2);
var epsilonInt = parseInt(epsilon, 2);
// const epsilon = (~gammaInt) >>> 0
console.log('Gamma Bin: ', gamma, 'Gamma Int: ', gammaInt, 'Epsilon Int: ', epsilonInt, 'Gamma x Epsiolon: ', gammaInt * epsilonInt);
