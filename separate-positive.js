"use strict";

/**
 * Mutate an array of non-zero numbers in place so that the positives are separated
 * on the left and negative values are on the right
 *
 * @param {number[]} nums An array of non-zero numbers
 * @returns {number[]} Return the original array mutated in place
 * @examples
 *  - separatePositive([2, -1, -3, 6]);         // [2, 6, -3, -1]
 *  - separatePositive([-5, 5]);                // [5, -5]
 *  - separatePositive([1, 2, 3]);              // [1, 2, 3]
 */

function separatePositive(nums) {
  let lPointer = 0;
  let rPointer = nums.length - 1;

  while (lPointer < rPointer) {
    if (nums[lPointer] < 0 && nums[rPointer] > 0) {
      [nums[lPointer], nums[rPointer]] = [nums[rPointer], nums[lPointer]];
      lPointer++;
      rPointer--;
    } else {
      if (nums[lPointer] > 0) {
        lPointer++;
      } else {
        rPointer--;
      }
    }
  }

  return nums;
}
