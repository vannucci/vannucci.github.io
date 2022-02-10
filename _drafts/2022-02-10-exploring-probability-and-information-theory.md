---
layout: post
title:  Exploring Probability and Information Theory
date:   2022-02-10 13:12:22 -0500
categories: information probability algebra math
---

I want to start a series about information theory, probability theory and the intersection of both with computers. I really enjoyed watching 3blue1brown's video about the game [Wordle](https://www.youtube.com/watch?v=v68zYyaEmEA) and it reminds me that very often even seemingly complex problems like "Create a computer program that can play Wordle" don't require modern techniques like machine learning. That often times the way a problem is structured has been done before and the mathematical underpinnings of it are well understood.

What struck me about the Wordle game problem is that it's fundamentally a question of "How much information does a guess give us?" Even if we assume that the set of words used in the game are all possible five letter English language words (which it isn't), then we already have quite a bit of information. Playing the game is like decrypting a code, we have some guesses, we get feedback on those guesses, and using that information we can figure out the most likely answer. It's beautiful how Shannon and Nyquist tackled this problem decades ago but in an only slightly different context.

Anyway, stay tuned, I want to start finding resources that unpack 3blue1brown's video a bit, both as an education for myself and for you the viewer. Any code will be available in Github and likely will be in Python since that is a great medium for these kinds of explorations.