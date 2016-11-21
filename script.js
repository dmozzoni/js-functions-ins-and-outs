"use strict";


const product = function product() {
  let result = 1;

  console.log(arguments);

  for (let i = 0; i < arguments.length; i++) {
    result = result * arguments[i];
  }

  return result;
};

product(1,2,3,4,5);
//------------------------------------------------------------------------------
const max = function max() {
  let result = null;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > result) {result = arguments[i];}
  }

  return result;
};

max(1,2,3,4,5,4);
//------------------------------------------------------------------------------
const productArray = function productArray(arr) {
  let result = 1;

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }

  return result;
};

productArray([1,2,3,4,5]);
//------------------------------------------------------------------------------
const maxArray = function maxArray(arr) {
  let result = null;

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result) {result = arr[i];}
  }

  return result;
};

maxArray([1,2,3,4,5,4]);
//------------------------------------------------------------------------------
// Write a function that takes an array full of integers, doubles each value, and
// returns a new array with those values.
const arrayTimes2 = function arrayTimes2() {
  let result = [];
  console.log(arguments);

  for (let i = 0; i < arguments[0].length; i++) {
    result[i] = arguments[0][i] * 2;
  }
  console.log(result);

  return result;
};

arrayTimes2([1,2,3,4,5]);
//------------------------------------------------------------------------------
const addProperty = function addProperty(obj, prop, val) {
  // this function takes an object and adds a property
  // to it
obj[prop] = val;
return obj;
};

let obj = {};
addProperty(obj, "name", 10);
console.log(obj);
//------------------------------------------------------------------------------
const transform = function (values, predicate, mutator) {
  // if the predicate is true, mutate the value, otherwise don't mutate it
  if(predicate) { mutator(values); }
};

transform([11,2,3,4,5],true,arrayTimes2);
//------------------------------------------------------------------------------
const createArray = function createArray() {
  let result = [];

  for (let i = 0; i < arguments.length; i++) {
    result[i] = arguments[i];
  }

  return result;
};

let testCreateArray = createArray(2,4,6,8,10);
//------------------------------------------------------------------------------

const arrayTransform = function arrayTransform(array, predicate, mutator) {
  // if the predicate is true, mutate the value, otherwise don't mutate it
  if(predicate)  { mutator(array); }
};

let testArrayTransform = arrayTransform([1,2,3,4,5],true,arrayTimes2);
//------------------------------------------------------------------------------

const createPerson = function createPerson(givenName, surname, bornOn, height, weight, eyeColor) {

   let obj = {};
   obj.givenName = givenName;
   obj.surname = surname;
   obj.bornOn = bornOn;
   obj.height = height;
   obj.weight = weight;
   obj.eyeColor = eyeColor;
   return obj;
};

let testCreatePerson = createPerson("David", "Mozzoni", "8-21-76", "5-9", 140, "blue" );
//------------------------------------------------------------------------------

const memoFactory = function (rememberMe) {
  let memo = rememberMe;

  return function () {
    return memo;
  };
};

//------------------------------------------------------------------------------
