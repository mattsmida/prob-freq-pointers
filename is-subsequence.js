"use strict";

/**
 * Check whether a given string forms a subsequence of another reference string
 * - s1 order matters
 * - s2 cannot change order
 * @param {string} s1 The string to check if characters appear in s2
 * @param {string} s2 The reference string to base the sequence check
 * @returns {Boolean} True if s1 can form a subsequence, False if not
 * @examples
 *  - isSubsequence('hello', 'hello world'); // true
 *  - isSubsequence('sing', 'sting');        // true
 *  - isSubsequence('abc', 'acb');           // false (order matters)
 */
function isSubsequence(s1, s2) {
  let s1Pointer = 0;
  let s2Pointer = 0;

  while (s2Pointer < s2.length) {
    if (s1[s1Pointer] === s2[s2Pointer]) {
      s1Pointer++;
    }
    s2Pointer++;
  }
  return s1Pointer === s1.length;
}
