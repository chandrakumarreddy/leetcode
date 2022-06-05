function isValidAnagram(s, t) {
  return [...s].sort().join("") === [...t].sort().join("");
}

// time complexity O(nlogn)
// space complexity  O(1)


function isValidAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sMap = {};
  const tMap = {};
  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = 1 + (sMap[s[i]] || 0);
    tMap[t[i]] = 1 + (tMap[t[i]] || 0);
  }
  for (let char in sMap) {
    if (sMap[char] !== tMap[char]) {
      return false;
    }
  }
  return true;
}

// time complexity O(s+t)
// space complexity  O(s)

console.log(isValidAnagram("anagram", "naragam"));
console.log(isValidAnagram("rat", "cat"));
