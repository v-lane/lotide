# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @v_lane/lotide`

**Require it:**

`const _ = require('@v_lane/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: given two arrays, logs to console a message confirming if arrays are equal or not equal.
* `assertEqual(actual, expected)`: given two values, logs to console a message confirming if values are equal or not equal.
* `assertObjectsEqual(object1, object2)`: given two objects, logs to console a message confirming if objects are equal or not equal.
* `countLetters(sentence)`: given a sentence as a string, returns object containing count (values) of each of the letters (keys) in sentence.
* `countOnly(allItems, itemsToCount)`: given array of items and object(value: item, key: true/false), returns object of ONLY the count of items in array that were marked true in object. Returned object(value: item, key: count of item in array).
* `eqArrays(arr1, arr2)`: given two arrays, returns true if arrays are equal or false if arrays are not equal. 
* `eqObjects(object1, object2)`: given two objects, return true if objects are equal or false if objects are not equal.
* `findKey(object, callback)`: given object and callback, scans object for first key for which the callback returns truthy value and returns this key. If no key found, returns undefined. 
* `findKeyByValue(object, value)`: given object and value, scans object and returns first key which contains given value. If no key found with value, returns undefined. 
* `flatten(array)`: given array containing elements including nested arrays, returns 'flattened' array with only 1 nested array level.
* `head(array)`: given array, returns first value of array.
* `letterPositions(sentence)`: given sentence as a string, returns an object that shows all indices (values) where each letter (key) is found.
* `map(array, callback)`: given array and callback, returns new array based on results of callback function.
* `middle(array)`: given an array, return middle-most element(s) as array. Odd-length array will return array with 1 value, even-length array will return array with 2 values. 
* `tail(array)`: given array, return as array all values EXCEPT first value. 
* `takeUntil(array, callback)`: given array and callback, return slice of the array with elements taken from the beginning until callback returns truthy value.
* `without(source, itemsToRemove)`: source array and 'items to remove' array, return new array with only elements from 'source' array that are NOT present in 'items to remove' array. 



