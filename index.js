const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertArraysEqual = require('./assertArraysEqual');
const eqArraysRecursive = require('./eqArraysRecursive');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const eqObjectsRecursive = require('./eqObjectsRecursive');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil= require('./takeUntil');
const without = require('./without');


module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  countOnly,
  countLetters,
  eqArrays,
  eqArraysRecursive,
  assertObjectsEqual,
  assertArraysEqual,
  eqObjects,
  eqObjectsRecursive,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without
};