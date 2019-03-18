---
layout: post
title:  "Application of Hash Maps"
date:   2019-03-18 10:15:42 -0500
categories: hashmaps
---

The problem here is to find the longest substring of a string which does NOT have repeating characters and return the length of said substring. Take a few examples:

```
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
```
```
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```
```
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
```

So when I approached this problem initially I took a 'Naive' solution at first. I would build a substring by removing chars off the input string, and every time I removed a char I would compare that possible char to every char on the substring. When a char on the substring and the main string equalled, this means I've hit a repeating character and my substring can stop being added to. I would count it's length, see if it is the longest substring, and then clear that substring and start over from where I left off. There were a few issues that needed to be worked out, but in general the idea was sound.

The main issue with this idea is that it operates in O(n^2) time at its worst. You have to scan the whole string (n) and the substring is at max also length (n). Since you are going over both repeatedly in nested for loops, this means O(n^2) time. That's not fast enough.

Reading more about possible solutions, I learned more about hashmaps. The idea is to createn a dictionary where the key

[LeetCode Solution]: https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/
[LeetCode Python Solution]:   https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/256596/Python3-Naive-and-Optimized
