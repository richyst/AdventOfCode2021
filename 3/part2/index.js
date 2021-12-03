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
var evalData = function (data, scenario, index) {
    if (index === void 0) { index = 0; }
    console.log(data, data.length, scenario, index);
    if (data.length === 1) {
        console.log('Returning: ', data[0]);
        return data[0];
    }
    var bits0 = [];
    var bits1 = [];
    for (var j = 0; j < data.length; j++) {
        if (data[j].charAt(index) === '1') {
            bits1.push(data[j]);
        }
        else {
            bits0.push(data[j]);
        }
    }
    switch (scenario) {
        case 'most':
            return evalData(bits1.length >= bits0.length ? bits1 : bits0, scenario, index + 1);
        case 'least':
            return evalData(bits1.length >= bits0.length ? bits0 : bits1, scenario, index + 1);
    }
};
var oxygenRating = parseInt(evalData(input_1["default"], 'most'), 2);
var co2ScrubberRating = parseInt(evalData(input_1["default"], 'least'), 2);
console.log('Oxygen Rating: ', oxygenRating, 'CO2 Scrubber Rating: ', co2ScrubberRating, 'O x C02: ', oxygenRating * co2ScrubberRating);
