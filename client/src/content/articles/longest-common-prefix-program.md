---
title: 'Longest Common Prefix Program'
description: 'Longest Common Prefix Program in Javascript'
published_at: '2021-01-10T00:00:00.000Z'
category: 'JavaScript'
tags: 'algorithm'
---

# Longest Common Prefix Program

### Problem Statement

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

**Example 1:**
Input: `strs = ["flower","flow","flight"]`
Output: `"fl"`

**Example 2:**
Input: `strs = ["dog","racecar","car"]`
Output: `""`
Explanation: There is no common prefix among the input strings.

**Constraints:**

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters.

### Solution

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let commonPrefix = '';
  let firstString = strs[0];
  if (strs.length === 0) return '';
  for (let j = 0; j <= firstString.length; j++) {
    let isNotMatched = false;
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== firstString[j]) {
        isNotMatched = true;
        break;
      }
    }
    if (isNotMatched) {
      break;
    } else if (firstString[j]) {
      commonPrefix += firstString[j];
    }
  }
  return commonPrefix;
};
```

### Sample Output

```javascript
// strs = ["flower","flow","flight"]
'fl';
```
