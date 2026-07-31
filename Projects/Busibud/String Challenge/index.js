// Have the function StringChallenge(str) take the str parameter being passed and determine the largest number of unique characters 
// that exists between a pair of matching letters anywhere in the string. 
// For example: if str is "ahyjakh" then there are only two pairs of matching letters, the two a's and the two h's. 
// Between the pair of a's there are 3 unique characters: h, y, and j. Between the h's there are 4 unique characters: y, j, a, 
// and k. So for this example your program should return 4.
// Another example: if str is "ghececgkaem" then your program should return 5 because the most unique characters exists within the 
// farthest pair of e characters. The input string may not contain any character pairs, and in that case your program should just return 0. 
// The input will only consist of lowercase alphabetic characters.

// Input: "mmmerme" Output: 3
// Input: "abccdefghi" Output: 0

function StringChallenge(str) { 
  let unique = 0, charMap = {};

  for (let i = 0; i < str.length; i++) {
      const char = str[i];
      console.log(`\nProcessing character '${char}' at index ${i}`);

      if (charMap[char]) {
          const prevIndex = charMap[char][0];
          const substr = str.slice(prevIndex + 1, i);
          const uniqueChar = new Set(substr);
          unique = Math.max(unique, uniqueChar.size);

          console.log("Previous index of character:", prevIndex);
          console.log("Substring between matches:", substr);
          console.log("Unique characters in substring:", Array.from(uniqueChar));
          console.log("Updated unique count:", unique);
      }

      if (!charMap[char]) {
          charMap[char] = [];
      }
      charMap[char].push(i);

      console.log("Updated charMap:", JSON.stringify(charMap));
  }

  console.log("Final unique:", unique);
  return unique;
}

// Test the function
console.log("Result:", StringChallenge("mmmerme"));
