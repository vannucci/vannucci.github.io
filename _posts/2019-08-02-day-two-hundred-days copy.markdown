---
layout: post
title:  "Dynamic Programming -- Climbing Stairs"
date:   2019-08-02 10:15:42 -0500
categories: dynamic-programming
---
## The Problem

[Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

**Example 1:**

**Input**: 2
**Output**: 2
**Explanation**: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

**Example 2:**

**Input**: 3
**Output**: 3
**Explanation**: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step



## My Story of Completing This Problem

First thoughts are, this is a combinatorial problem. "How many ways" implies that you're counting. This also means that we can think of a base case, i.e. when there's one step, there's only one way to climb to the top "1 step", or no steps there's also one way "0 step". Also if there are two steps, there are two ways to climb the steps, "1 step + 1 step" and then "2 steps".

It's at this point that I get stuck, (I actually just stood up and ate a piece of fruit while thinking). I know that there's a recursive step built into that way of thinking, but how I turn that into a recursive *call* I'm not sure of.

Let's think of this a bit more. So I started by writing in my base cases as follows

```
var climbStairs = function(n) {
    if(n === 0 || n === 1) {
        //in the case of one or no steps, there's only one way to climb it
        return 1;
    }
    if(n === 2) {
        //in the case of two steps, there are two ways to climb it
        return 2;
    }
};
```

But now I gotta say I'm kind of stuck again. I know it'll have something to do with adding together climbStairs of different values...

## Just Try It And See

Okay so this is a bad way to do things, but I decided to just try what _seemed right_ and see what happened. So I think it worked, here's the current version which passes my tests:

```
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 0 || n === 1) {
        //in the case of one or no steps, there's only one way to climb it
        return 1;
    }
    if(n === 2) {
        //in the case of two steps, there are two ways to climb it
        return 2;
    }

    if(n > 2) {
        return climbStairs(n - 2) + climbStairs(n - 1)
    } else if(n > 1) {
        return climbStairs(n - 1)
    }

}

console.log(climbStairs(5));
```

and it seems to work! But it's too slow. So this is probably where I need to add in memoization which can build up an object's worth of repeating subproblems and speed this whole thing up. But I have to admit, at this point I'm going to go check on a tutorial _how_ to add in the memoization.

```
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let store = {};
    return stairsRecur(n,store);
}

var stairsRecur = function(n, rec) {
    if(n === 0 || n === 1) {
        //in the case of one or no steps, there's only one way to climb it
        return 1;
    }
    if(n === 2) {
        //in the case of two steps, there are two ways to climb it
        return 2;
    }

    if(n > 2) {
        if(rec[n]) { 
            return rec[n] ;
        }
        rec[n] = stairsRecur(n - 2,rec) + stairsRecur(n - 1,rec);
        return rec[n];
    } else if(n > 1) {
        if(rec[n]) { 
            return rec[n] ;
        }
        rec[n] = stairsRecur(n - 1,rec);
        return rec[n];

    }

}

console.log(climbStairs(100));
```

So this is my final version. I did a bit of reading on memoization and then ran some tests using this version, and while it's not the _most_ succinct version, it's easy for me to follow and explain.


## Follow-Up
I think this problem was far easier than the last one because, unsurprisingly, I had seen this before and roughly knew how to solve it. The main issue with this problem is I _still_ can't see how that sort of recursive call gets the right answer so easily. It's something I need to read about more.