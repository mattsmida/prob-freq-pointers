"use strict";

/**
 * Return a boolean check on if a targetAvg can be achieved in a array of numbers
 * @param {number[]} nums - A sorted array of numbers
 * @param {number} targetAvg - The value that we want to look for
 * @return {Boolean} - The check on if targetAvg is achieveable by averaging pairs
 *  in the nums array
 * @example ([1, 2, 3], 2.5) -> true
 */

function averagePair(nums, targetAvg) {
  if (nums.length === 0) return false;

  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const avg = (nums[start] + nums[end]) / 2;

    if (avg === targetAvg) {
      return true;
    } else if (avg < targetAvg) {
      start++;
    } else {
      end--;
    }
  }

  return false;
}

