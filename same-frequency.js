"use strict";

/**
 * Check if two given positive integers have the same frequency of comprising digits
 * @param {number} num1 A positive integer
 * @param {number} num2 Another positive integer
 * @returns {Boolean} True if the same frequency, False if different
 */

function sameFrequency(num1, num2) {
  const num1AsArr = num1.toString().split("");
  const num2AsArr = num2.toString().split("");

  if (num1AsArr.length !== num2AsArr.length) return false;

  const num1Obj = makeFreqCounter(num1AsArr);
  const num2Obj = makeFreqCounter(num2AsArr);

  for (let key in num1Obj) {
    if (!(key in num2Obj) || num1Obj[key] > num2Obj[key]) {
      return false;
    }
  }
  return true;
}

/**
 * Find the frequency of elements in an iterable and return an object
 *
 * @param {string|Array} iterable - The iterable thing to count out its elements
 * @returns {Object} - The object containing the element frequency
 */

function makeFreqCounter(iterable) {
  const frequency = {};

  for (let ele of iterable) {
    frequency[ele] = (frequency[ele] || 0) + 1;
  }

  return frequency;
}

