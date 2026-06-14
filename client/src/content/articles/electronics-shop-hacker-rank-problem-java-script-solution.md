---
title: 'Electronics Shop - HackerRank Problem - JavaScript Solution'
description: 'Electronics Shop - HackerRank Problem - JavaScript Solution'
published_at: '2021-08-10T00:00:00.000Z'
category: 'Algorithms'
tags: 'algorithm, hacker-rank, program'
---

# Electronics Shop - HackerRank Problem - JavaScript Solution

A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a given budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return -1.

### Example

`b = 60`
`keyboards = [40, 50, 60]`
`drives = [5, 8, 12]`

The person can buy a 40 keyboard + 12 USB drive = 52, or a 50 keyboard + 8 USB drive = 58. Choose the latter as the more expensive option and return 58.

### Function Description

Complete the `getMoneySpent` function in the editor below.

`getMoneySpent` has the following parameter(s):

- `int keyboards[n]`: the keyboard prices
- `int drives[m]`: the drive prices
- `int b`: the budget

Returns

- `int`: the maximum that can be spent, or -1 if it is not possible to buy both items

### Sample Input 0

```
10 2 3
3 1
5 2 8
```

### Sample Output 0

```
9
```

### Explanation 0

Buy the 2nd keyboard and the 3rd USB drive for a total cost of 8 + 1 = 9.

### Sample Input 1

```
5 1 1
4
5
```

### Sample Output 1

```
-1
```

### Explanation 1

There is no way to buy one keyboard and one USB drive because 4 + 5 > 5, so return -1.

### Program

```javascript
function getMoneySpent(keyboards, drives, b) {
  let bestChoice = -1;
  for (const keyboard of keyboards) {
    for (const drive of drives) {
      const currentBudget = keyboard + drive;
      if (currentBudget <= b && currentBudget > bestChoice) {
        bestChoice = currentBudget;
      }
    }
  }
  return bestChoice;
}
```
