---
title: 'Drawing Book - HackerRank Problem - JavaScript Solution'
description: 'Drawing Book - HackerRank Problem - JavaScript Solution'
published_at: '2021-04-10T00:00:00.000Z'
category: 'JavaScript'
tags: 'algorithm'
---

# Drawing Book - HackerRank Problem - JavaScript Solution

A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page 1 is always on the right side.

When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is n pages long, and a student wants to turn to page p, what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.

### Sample Input 0

```
6
2
```

### Sample Output 0

```
1
```

### Sample Input 1

```
5
4
```

### Sample Output 1

```
0
```

## Code

```javascript
function pageCount(n, p) {
  let numOfPageTurned = 0;
  // for odd pages
  if (p === 1 || p === n) {
    return numOfPageTurned;
  }
  // for even pages
  if (n % 2 === 0 && p === n - 1) {
    return 1;
  }
  for (let i = 1; i <= n / 2; i++) {
    if (i === p || n - i === p) {
      numOfPageTurned = Math.floor(Math.min(i, n - 1) / 2);
      break;
    }
  }
  return numOfPageTurned;
}
```
