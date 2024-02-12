
const assertEqual = require('../assertEqual');
const head = require('../head');


//test code

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([], undefined));
assertEqual(head([1]), 1);
assertEqual(head([1, 2, 3]), 1);
assertEqual(head(["1", "2"]), "1");