---
layout: post
title:  "Lessons From A Simple Game"
date:   2019-05-09 11:51:42 -0500
categories: game processing simple
---

# What Have I Learned Building A Simple Game
Have you ever been to a doctor's office or dentist's office and seen those cheap, plastic sliding puzzle toys? It's a square board, consisting of numbered tiles on the board which you can slide around. The goal of the game is to get all the tiles in sequential order. It's a simple game to explain, but actually completing it takes some figuring.

I'm also a big fan of the [Processing](https://processing.org/) framework and community of languages. Their goal of producing a framework specifically designed for graphics and drawing is fantastic, and it serves as a really easy introduction to programming. I find it relaxing (at times) to work with (it's also not a half-bad way to learn Java, in the original language of Processing).

So trying to challenge myself, this week I decided to create that sliders game in Processing for myself. Ideally I would also have implemented a solving engine so that the computer could solve the puzzles itself. But this project ended up taking longer than I thought, so for now I'm just going to leave it as it is. [Here's the link](https://github.com/vannucci/SlidingPuzzleGame) for the curious.

The idea began as a far more ambitious project idea, to build a 4-dimensional rubiks hypercube game. But realizing I had no idea where to start with that, I decided instead to work my way up in dimensions. Since I couldn't think of a 2-dimensional rubik's cube, this seemed like a decent alternative. The goal of the game is what you'd expect: arrange the tiles in order starting from a "random" sequence.

In the rest of this post, I want to talk to you about a few of the challenges I had and how I overcame them, some of the mental techniques I used to keep myself organized and moving forward with this project, and my plans for more 2-dimensional puzzle game implementations.

# Challenges

I know I suffer from what I call "bottom of the mountain-itis". The basic idea of this is imagine a climber standing at the bottom of a mountain. They look up, see difficult and unpassable terrain, and are completely overwhelmed with the distance that they need to travel to reach the summit. They completely overwork themselves and decide that "eh I don't think I can actually _do_ this" and go home.

This is what I do to myself A LOT. I can easily overwork myself thinking about all the different features and functions needed to get something done, and things I don't even know how to _do_, and I just give up.

## Comment-Driven Coding

This was where my Angel of Mercy showed up in hackernews (still a pompous name) and gave my an idea which helped me break this problem wide open. "Don't start by writing code. Start by writing comments. Write a comment for a main function that drives the whole thing, and then write a comment for a helper function or object for that main function. Organize and think about what your comment-functions will take in and return, with NO REGARD for what the actual code will be. Then after you have commented a lot out, start coding."

If anyone wants to tattoo this hackernews comment onto my belly upside down like in Memento, I will pay you so much money.

This simple act of thinking through your code with just comments, even if you just write comments like "this function automagically takes this input and returns this output, hooray!" and trust that later on, when you need it, you can figure out how to make this function do what it needs to do, this relieves SO MUCH PRESSURE.

## Bird By Bird (thank you, Anne Lamott)

Okay now I have a TON of comments, spread across different files, (oh and I just assume they'll all import exactly the way I want them to. Yup. No problems _there_) and it all "works", I think? The next issue is actually coding. Ugh, can't I just climb the mountain in like, a movie montage???? Fine. So you start coding. "Oh I know how to do _this_, and this and this and well, I forgot the syntax to this.... nevermind! Got it!" and you go on like this for a while. Eventually you get to a point where you _don't_ know what to do, and you don't even know what _question_ to ask. Oh man. Guess my programming career is over. Maybe Denny's is still hiring....

No, no you can do this. Just take it step by step, and focus on what you know. Write out some comments explaining what each step should do. Okay, now identify *exactly* where you get stuck. Not in a broad sense, very very precisely. This was a technique I taught my students, both as a way to encourage them that they knew more than they thought, and as a tool for being a good question-asker. When someone asks you for something, saying, "Oh I don't know anything, can you just show me the whole thing?" you're gonna say "No, don't waste my time" (by the way if you've ever said YES and regretted it, it's time to reevaluate your sense of self-worth). But if someone asks "Hey I did all of this stuff, and there's this one part right here that is stopping me..." then the person you're asking _should_ very happily and easily help you, assuming it's a good time to ask, (and on that note, if the person you're asking is an asshole about the question, either you asked them at the wrong time _or_ they're toxic and probably not good to work with, beware).

But thanks to Anne Lamott, there's a term for everything I just said above. "Bird By Bird" is an excellent book about the process of writing, and this idea that we take everything just one step and one piece and one comment at a time is so helpful. Don't doubt that even your senior colleagues do their work one keystroke at a time, (okay Anne Lamott never had snippets and emmet to help HER, poor soul).

## "Eh, this is good enough"

The last issue I had was going far enough. The part of me who, at the beginning, wanted to go 1,000 mph and do a million features has taken a back seat to current me, who has been struggling against small problems for HOURS, now, and he's tired. Those small problems turn out to have miniscule solutions and you've lost an entire day on stackoverflow and wonder how you'll ever catch up to the knowledge your senior colleagues have and oh god will the sun ever shine on your face (okay maybe that's a bit far).

My point is, you start off with grandiose dreams and then you get tired. It takes a lot of mental energy to keep coming back to a big problem and keep chipping away at it, especially when new, younger, sexier problems arise and they want your time _too_ ("Oh, learn Haskell?? That's so intriguing...." [see my post on how people who marry young make the best programmers]()).

This ends up being the real work of programming. You start out really strong and ambitious, but then you get into the weeds and you start realizing all the little mistakes you just ignored early on have become real issues. You just want to abandon this project in favor of the easier, more open beginning project you had. But it's not the _start_ of a project that's any good. It's only after a long time and lots of code and tests and features that a project becomes any good. I can't say I have a solid trick for this portion of the problem, the "learning to pace yourself" problem. Maybe take up running?

# Conclusion

I finished the sliders game and it worked. I never got to the point of implementing an AI to solve it, but that could be step 2 of the game. What I did learn about myself doing this project was how it is that my own brain and my emotions _think_ when posed with challenges that require patience, slowing down, and being methodical. These aren't just "good qualities" for someone who wants to build things, these are *necessary qualities* to be a builder. What I think I've learned through this entire process, however, is that they are indeed _learnable_. All it takes is a little self-reflection, a LOT of written satire (see above) and some in-the-moment mindfulness.