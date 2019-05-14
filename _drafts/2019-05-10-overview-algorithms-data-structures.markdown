---
layout: post
title:  "An Overview To Algorithms and Data Structures"
date:   2019-05-10 10:15:42 -0500
categories: algorithms data-structures
---
## References
1. Skiena
1. Geeks for Geeks
1. Wikipedia [dictionary problem](https://en.wikipedia.org/wiki/Associative_array)

# Overview
There are many, SO MANY resources out there on the internet for the topic of "algorithms and data structures". Why am I writing a piece of my own here, and why should you, the reader, care about what I've written? When I started learning about computer science I naturally started learning algorithms and these mysterious "data structures" and thought that I had a [TON](https://en.wikipedia.org/wiki/List_of_algorithms) of [things](https://en.wikipedia.org/wiki/List_of_data_structures) to memorize. Reading more over the course of this last year has taught that in reality, there are not as many things you strictly need to memorize and know by heart. Rather I needed to know these things in a more abstract sense, and then have the tools in a given language to apply them, and test and learn by experimentation when different structures are useful or not.

This was an idea, the idea of chunking and grouping small ideas into larger ones, that helped me and my students when I taught physics. There are only a small number of ideas you actually need to memorize in physics and mathematics to make predictions about the physical world. But knowing which are good for which situations takes experience and trying to apply ALL of them.

So in this post, I want to start taking a look at the big ideas in data structures and algorithms and attempt to generalize these ideas to make them less intimidating.

# Base Data Structures
At its most basic I want you to imagine computer memory like a set of little boxes which you have glued together, one next to another, in a line. Each box has a number on it (it's address), and each box can contain something or be empty. Also, for the sake of this analogy, we will add a person standing next to the boxes whose entire job is to put stuff in boxes, get stuff out of boxes, and knows all the box addresses by heart.

At its core, this is how computer memory works. The person who manages the boxes, the boxes themselves, that's almost an entire computer (don't just take my word for it, [this random New Yorker](https://www.youtube.com/watch?v=EKWGGDXe5MA) agrees with me).

From this base, we can see there are only two fundamental types of data structures that we can have here. One is a Contiguous Data Structure, where you pick a group of boxes and put your data inside them. You know where the group is, which indexes it starts and stops at, and they're all grouped together. The second fundamental type is a Linked Data Structure, where instead of having all the boxes be in the same group, they're spread out, and two boxes are needed for each data point, one for the data and another for which box comes next. Now that might seem too easy, really only two fundamental data structures to learn?

That's it. All others are just scrambled versions of those two.

# Base Algorithms
Next we'll talk about basic algorithms. The list of algorithms is long and filled with names of people you've never heard of, or terms like A* which make no sense. Moreover, many of these algorithms are pretty specialized to the task that they were designed for. Trying to simplify down to 'base algorithms' is a more difficult task since at their core, an algorithm is just a guided series of steps to accomplish something. What I will say is that there are a few common and often repeating tasks a computer algorithm is designed for.

First, search. You have your data structure and you're trying to find a particular element inside that structure. Search is your key priority. Second, and related to search, is insertion or deletion. Growing or pruning your structure is what makes it useful, even if first you have to find it. Lastly I think I would include rearranging and sorting your structure is probably one of the more important basic algorithms. Sorting it based on some fundamental criteria and returning that sorted result is key to why we have these structures in the first place.

Beyond those three or four basic goals for algorithms, there's the issue of HOW you will accomplish this task. Again, fundamentally there are two ways to think about this. One is the imperative solution, and another is a recursive solution.

# Conclusion
Thinking this way about algorithms and data structures made me realize that the bottom line of the amount of stuff I need to memorize is as follows:

* 2 basic structures
* 4 basic tasks
* 2 ways to accomplish each task

So I would be willing to bet that learning or memorizing 16 different structures and algorithms, in a form of pseudocode, would cover the vast majority of algorithmic tasks the average developer needs. When it came to more complex tasks or algorithms, you simply wouldn't memorize *how* to implement them, simply how they're designed to work, (take an array map or some sort of compression algorithm. If that's your specialization then please know it, but if it isn't what you do normally, then implementing those things simply shouldn't be a big priority to you or your employer).