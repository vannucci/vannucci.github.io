---
layout: post
title:  "Lessons From A Simple Game"
date:   2019-04-05 11:51:42 -0500
categories: game processing simple
---

# What Have I Learned Building A Simple Game
Have you ever been to a doctor's office or dentist's office and seen those cheap, plastic sliding puzzle toys? It's a square board, consisting of numbered tiles on the board which you can slide around. The goal of the game is to get all the tiles in sequential order. It's a simple game to explain, but actually completing it takes some figuring.

I'm also a big fan of the [Processing](https://processing.org/) framework and community of languages. Their goal of producing a framework specifically designed for graphics and drawing on the computer is fantastic, and it serves as a really easy introduction to programming as well. I find it relaxing (at times) to work with Processing, (it's also not a half-bad way to learn Java, in the original version of Processing).

So trying to challenge myself, this week I decided to create that sliders game in Processing for myself. Now, ideally I would also have implemented a solving engine so that the computer could solve the puzzles itself. But this project ended up taking longer than I thought, so for now I'm just going to leave it as it is. Playable by a human. [Here's the link](https://github.com/vannucci/SlidingPuzzleGame) for the curious.

The idea began as a far more ambitious project idea, to build a 4-dimensional rubiks hypercube game. But realizing I had no idea where to start with that, I decided instead to work my way up in dimensions. Since I couldn't think of a 2-dimensional rubik's cube, this seemed like a decent alternative. The goal of the game is what you'd expect: arrange the tiles in sequential order starting from a 'random' sequence.

In the rest of this post, I want to talk to you about a few of the technical challenges I had and how I overcame them, some of the mental techniques I used to keep myself organized and moving forward with this project, and my plans for more 2-dimensional puzzle game implementations.

# Technical Challenges
