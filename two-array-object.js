"use strict";

/**
 * Create an object from two given arrays of possibly different lengths.
 *  - If there are more keys than values, assign null to each remaing key
 *  - If there are more values than keys, ignore rest of values
 *
 * @param {string[]} keys - an array of strings that become the object's keys
 * @param {Array} values - an array of values that will become the object's values
 * @returns {Object} A new object with {...keys: ...values}
 */

function twoArrayObject(keys, values) {
  const newObject = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    let value;
    if (i < values.length) {
      value = values[i];
    } else {
      value = null;
    }
    newObject[key] = value;
  }

  return newObject;
}
