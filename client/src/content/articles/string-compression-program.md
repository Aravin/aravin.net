---
title: 'String Compression Program'
description: 'String Compression Program'
published_at: '2021-01-10T00:00:00.000Z'
category: 'JavaScript'
tags: 'algorithm'
---

# String Compression Program

### Problem

String Compression Implement a method to perform basic string compression using the counts of repeated characters. For Example: the string aabcccccaaa would become a2b1c5a3

- If the compressed string would not become smaller than the original string,
- your method should return the original string.
- you can assume the string has only uppercase and lowercase letter (a-z)

### Program

```javascript
/** * String Compression * Implement a method to perform basic string compression using the counts of repeated characters. * For Example: the string aabcccccaaa would become a2b1c5a3 * If the compressed string would not become smaller than the original string, * your method should return the original string. * you can assume the string has only uppercase and lowercase letter (a-z) */
function stringCompression(str) {
  const stringLength = str.length;
  let compressedString = '';
  let charCount = 1;
  for (let i = 0; i < stringLength; i++) {
    if (str[i] === str[i + 1]) {
      charCount++;
    } else {
      compressedString += str[i];
      compressedString += charCount;
      charCount = 1;
    }
  }
  if (compressedString.length > stringLength) {
    return str;
  } else {
    return compressedString;
  }
}
console.log(stringCompression('aabcccccaaa'));
console.log(stringCompression('abc'));
console.log(stringCompression('xyz'));
console.log(stringCompression('AabBcC'));
console.log(stringCompression('cooool'));
```

### output

```
a2b1c5a3 abc xyz AabBcC c1o4l1
```
