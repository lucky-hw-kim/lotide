# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lucky-kim/lotide`

**Require it:**

`const _ = require('@lucky-kim/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(...)`: This function returns series of success / failure messages printed to the console, letting us know if our functions are behaving as expected.

* `head(...)`: This function is used to retrieve the first element from the array.

* `tail(...)`: This function returns the tail of an array. It is meant to be every element except the head (first element) of the array.

* `middle(...)`: This function returns an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

* `eqArrays(...)`: This function  can compare two arrays for a perfect match. except do not return true for nested arrays or arrays of objects that are identical

* `eqArraysRecursive(...)`: This function  can compare two arrays for a perfect match. Including return true for nested arrays or arrays of objects that are identical

* `assertArraysEqual(...)`: This function will take in two arrays and console.log an appropriate message to the console to compare if the arrays are equal

* `without(...)`: This function returns a subset of a given array, removing unwanted elements.

* `flatten(...)`: Given an array with other arrays inside, it can flatten it into a single-level array.

* `countOnly(...)`: This function will be given an array and an object. It will return an object containing counts of everything that the input object listed.

* `countLetters(...)`: This function takes in a sentence (as a string) and then return a count of each of the letters in that sentence.

* `letterPositions(...)`: This function will return all the indices (zero-based positions) in the string where each character is found.

* `findKeyByValue(...)`: This function takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

* `eqObjects(...)`: This function takes in two objects and returns true or false, based on a perfect match.

* `assertObjectsEqual(...)`: THis functions takes in two objects and console.log an appropriate message to the console.

* `map(...)`: This function will return a new array based on the results of the callback function.

* `takeUntil(...)`: This function will keep collecting items from a provided array until the callback provided returns a truthy value.

* `findKey(...)`: This function takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

* `eqObjectsRecursive(...)`: This function takes in two objects and returns true or false, based on a perfect match. Including subObjects.