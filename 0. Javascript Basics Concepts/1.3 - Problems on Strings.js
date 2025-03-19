// Problem on Strings - Check Palindrome Of a String
function palindrome(s){
  let i = 0, j = s.length - 1;
  while(i <= j){
    if(s[i] == s[j]){
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}

let s = "AVA";
let ans = palindrome(s);
if(ans == true) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome");
}


// Problem on Strings - Frequency Of Each Character
function occuranceOfEachCharacter(s){
  let freqMap = {};
  for(const char of s){
    if(freqMap[char]){
      freqMap[char]++;
    } else {
      freqMap[char] = 1;
    }
  }
  return freqMap;
}

let s = "Frequency";
console.log(occuranceOfEachCharacter(s));    // Putput -> { F: 1, r: 1, e: 2, q: 1, u: 1, n: 1, c: 1, y: 1 }
