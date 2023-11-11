"use strict";

/**
 * Check if you can find a targetAvg when averaging pairs from a sorted array.
 * @param {number[]} nums - A sorted array of numbers
 * @param {number} targetAvg - The target average
 * @return {Boolean} Return true if the average of pair matches the target or false
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

