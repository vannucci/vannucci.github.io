---
layout: post
title:  "One Hundred Days of Dynamic Programming -- Day One"
date:   2019-02-01 10:15:42 -0500
categories: dynamic-programming
---
## The Problem

[Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

_Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum._

*Input:* [-2,1,-3,4,-1,2,1,-5,4],
*Output:* 6
*Explanation:* [4,-1,2,1] has the largest sum = 6.

## My Story of Completing This Problem

--I set up some basic helper functions I would need, finding the sum and an object to track the subarray in question.
--I start by thinking what is the _state_ that I'm tracking and that is going to determine the final answer? Well since it's the maximum subarray, it's going to be a given subarray which I'll describe with a start and end point.
--I know that the max subarray lives somewhere inside my larger array...

...and this is the point where I gave up and looked for a tutorial on Geeks for Geeks. Now, I'll admit that I gave up after staring at it, trying meekly a solution that worked _with an unrelated problem_ and totally worked myself up in my head thinking "This'll never work...." and so on.

But now that I've looked up the solution, what do I do about this? Do I just read the solution, copy-pasta the answer into LeetCode and take my little, ill-gotten dopamine kick for having passed all the tests?

This is where I think a lot of learners, myself included, make a mistake. It's not _bad_ that you looked up a solution, (after all, you're learning, and this stuff is *hard*) it's that once you GOT the solution, you just copied it and moved on.

My goal now that I have a solution should be to, at the very least, be able to memorize it and recall it totally from memory and give a basic explanation.

But a _better_ goal with this solution would be to explain it to myself in such a way that I could explain it to past me, or the next person who doesn't know, and try and make it clear where the larger problem solving steps are.

So let's look at the solution that I learned about from [Geeks with Geeks](https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/). This is called Kadane's algorithm and it runs in O(n) time:

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //Kadane’s algorithm 
    let max_so_far = 0;
    let max_ending_here = 0;
    
    //loop over array
    for(let i = 0; i < nums.length; i++) {
        max_ending_here += nums[i];
        if(max_ending_here < 0) {
            max_ending_here = 0;
        }
        if(max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
        }
    }
    return max_so_far;
};
```

So the idea is that we have two state variables, one tracking the maximum sum we have achieved (`max_so_far`), and the other tells us the max if we end right where we are (`max_ending_here`). I think the second state variable is a bit oddly worded, but it's goal is to keep track of the max of a particular subarray.

Now there seems to be an implied variable here, the _start_ of the subarray. The end is tracked by our for-loop's index `i`, but the start of that subarray is not directly tracked. If we wanted to _return_ the largest contiguous subarray, we could modify the code as such:


```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //Kadane’s algorithm 
    let max_so_far = 0;
    let max_ending_here = 0;
    let start_subarray_index = 0;
    let end_subarray_index = 0;
    
    //loop over array
    for(let i = 0; i < nums.length; i++) {
        max_ending_here += nums[i];
        
        if(max_ending_here < 0) {
            start_subarray_index = i + 1;
            end_subarray_index = i + 1;
            max_ending_here = 0;
        }
        if(max_so_far < max_ending_here) {
            if(i + 1 <= nums.length) {
                end_subarray_index = i + 1;
            } else {
                end_subarray_index = nums.length;
            }
            max_so_far = max_ending_here;
        }
    }
    return nums.slice(start_subarray_index ,end_subarray_index);
};
```

The reason why we include the + 1's and check if we've overrun the array is because it's the _next_ index which is where we start adding back in elements from the array if we restart the search. We also check if end_subarray_index has overrun the end of the array so that we don't get an error.

## Follow-Up
Now this is the tricky part: how do I _practice_ this lesson I've learned and make sure that I can recall it? There are a couple of things to consider here. One is, I could simply memorize Kadane's algorithm (it's not that complicated) and memorize the "Maximum Contiguous Subarray" problem and just tie them together somehow, (and that's not a terrible thing to do in an academic context, mind you). In the short-term, this isn't actually a bad idea. I can perform this task, and it's entirely possible I'll find tasks which can use this technique that aren't _directly_ connected to this trivial problem.

