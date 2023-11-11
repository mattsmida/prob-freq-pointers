"use strict"

/** This function check to see if *word* can be built from *letters*.
 *  It takes in two strings (word and letters), and outputs a boolean.
 *  f('aa', 'abc') --> false
 */
function canConstructWord(word, letters) {
  // Make two frequency counters, one for words, one for letters
  // Compare the values of wordFreqs and letterFreqs

  if (word.length > letters.length) return false;

  const wordFreqs = makeFreqCounter(word);
  const letterFreqs = makeFreqCounter(letters);

  // For each letter in word, make sure it appears in letterFreq
  // Return false if not.

  for (let char of word) {
    if (!(char in letterFreqs)) {
      return false;
    }
  }

  // Loop through wordFreqs and make sure that the values for each key
  // are less than or equal to the values in letterFreq.

  for (let char in wordFreqs) {
    if (wordFreqs[char] > letterFreqs[char]) {
      return false;
    }
  }

  return true;

}

/** Makes a frequency counter object by taking a string and returning
 *  the object as key: char, value: number of occurences.
 */
function makeFreqCounter(str) {
  const freqObj = {};
  for (let char of str) {
    if (freqObj[char] === undefined) {
      freqObj[char] = 1;
    } else {
      freqObj[char]++;
    }
  }
  return freqObj;
}