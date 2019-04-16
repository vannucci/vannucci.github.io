---
layout: post
title:  "Welcome to Jekyll!"
date:   2019-04-15 13:00:00 -0500
categories: css
---
## I Hate CSS, Why Practice It?
I took a bootcamp course to become a 'Full Stack Developer' from being a teacher. It was a great introduction into the daily life of (mostly) a front-end developer. Since then I've spent a year in my first developer role (I'm still largely a front end developer), and my understanding of what it means to write a web app has grown tremendously.

All except for CSS.

When I style our app's front end, it still feels largely as if I'm guessing at how I want things to work, using a lot of trial and error, until I eventually stumble on the right way to do things (or a colleague who is better at it comes over and helps me). As weaknesses go, this isn't my biggest concern since design and front-end work isn't where I want to go as a software developer. But it's still a source of concern that I know I cannot explain how to take a drawing of a web app idea of mine, and (stumble) towards an HTML/CSS package which (somewhat) embodies that. Even if I never become a great designer and auteur of CSS, I still want to be a step above the proverbial monkey banging on a keyboard.

## The State Of Learning CSS
![Draw the rest of the fucking owl](/assets/fuckingowl.png)

[This subreddit](https://www.reddit.com/r/restofthefuckingowl/) summarizes my feelings towards most CSS tutorials I've read. I've read many of them. Here's a good template for writing your own shitty CSS tutorial:

1. Draw a picture of a perfect web app view (preferably in Photoshop which I cannot afford and would use ONCE and forget)
1. Draw colored borders around "semantic elements" of that view (oh and then NEVER USE COLORED BORDERS AGAIN)
1. Write some HTML with all those elements one after another. Give them arbitrary 'div' names and 'classes' and don't ever think about accessibility (just mention it in passing)
1. Write a link to Bootstrap/Semantic/Material framework CDN, and then name your div's after framework classnames but don't explain any of the other ones (bonus points if you tell them IT'S SO EASY)
    * Or, make your users run npm init and then install bootstrap 4 and all its dependencies
1. Ignore the bloat that comes with having to load tons of CSS and JS you'll never use
1. ????
1. Profit!

My problem with this way of learning is that your audience doesn't learn anything about what it takes to write a CSS framework (hell it took me 6 months to really understand what that MEANS), and you've contributed to more people overusing complicated software for really simple web apps or sites, and bloating simple single page apps which are supposed to be lean.

In my searches, I have found a few resources whose authors have really tried to break down this question of styling a simple web app and I wanted to list them here and thank them. Notable [Tania Rascia](https://www.taniarascia.com/tags/css/) [^1] who wrote a stunning piece on rolling your own framework, and the good people at [Thoughtbot](https://thoughtbot.com/upcase/) [^2] for doing a few videos on how you can achieve a lot with just plain CSS and no JavaScript (not everything, though). Lastly, the entirety of [CSS Tricks](https://css-tricks.com/)[^3] for just having any possible GOOD tutorial you could ask for.

So, my goal with this series of posts is to "Draw the rest of the fucking owl" and show you, in as much detail as I know it, how to write your own CSS, create a general process for rolling custom CSS, perhaps write your own framework for your projects (thanks, Tania), and show you all of my drafts from shitty first to polished nth.

## My process for learning CSS
At a high level, I read a lot, I write a lot of notes (by hand), and then I make a lot of shitty drafts until something comes out good. Then, I write (by hand) what I did, try to generalize it, do it again and again until it's not shitty. Here is a picture of some of my notes for this project:

![Handwritten notes from a caveman](/assets/exercisejournalnotes.png# thumbnail bordered)

My first step is drawing by hand what I want my view to look like. I like drawing on graph paper so that I can line everything up, draw arrows indicating the rough sizes of things, and start to think about which parts need their own columns or rows.

Next, I start by thinking 'logically' about what parts I need. What semantic HTML tags do I need to describe the pieces of my view? This is a tricky step, I'll be honest, and with the view I've worked on for this post, I tweaked it about a half dozen times and I don't know if there are any better ways to learn this. Make a lot of views, read other people's HTML and write notes on what those people say. That's the best I've got.

Then, I code up the HTML. I just want to get all the elements in the file, with some dummy data or text, regardless of how they show up. This is what I ended up with after a few different tweaks:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Exercise Journal</title>
    <link rel="stylesheet" href="stylesheet.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Exercise Journal</h1>
        </header>
                <nav role="navigation" class="navbar">
                    <ul>
                        <li>Nav
                            <ul class="dropdown">
                                <li><a href="#">One</a></li>
                                <li><a href="#">Two</a></li>
                                <li><a href="#">Three</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
        <time datetime="2019-04-16"><span>April 16, 2019</span></time>
        <form action="" method="POST" class="exercise-input" id="main-input">
            <title>Enter Today's Exercise</title>

            <label for="exerciseType" class="element-label">Type
                <input type="radio" name="type" id="exerciseType"><label for="exercise-type">Reps/Sets</label>
                <input type="radio" name="type" id="exerciseType"><label for="exercise-type">Duration</label>
            </label>
            
            <label for="exerciseName" class="element-label">Movement
                <input type="text" name="exerciseName" id="exercise-name" required="true">
            </label>
            
            <label for="sets" class="element-label">Sets
                <input type="text" name="sets" id="sets">
            </label>

            <label for="reps" class="element-label">Reps
                <input type="text" name="reps" id="reps">
            </label>

            <label for="resistance" class="element-label">Resistance
                <input type="text" name="resistance" id="resistance">
            </label>

            <label for="unit">Unit
                <input type="text" name="unit" id="unit">
            </label>

            <label for="notes">Notes
                <textarea name="notes" id="notes" cols="30" rows="10" form="main-input"></textarea>
            </label>

        </form>
    </div class="container">
    <footer> copyright 2019</footer>
    
</body>
</html>
```

My last step then is going into the belly of the beast. I link a stylesheet to my view, and I start writing in my CSS to style this monstrosity.

tl;dr, Draw it by hand, split the drawing up into 'pieces', write HTML, make a stylesheet ~~and close the window and never speak of this again~~

## A Checklist-based Approach to CSS for people with zero patience

What do I know now, having done this, which I did not before?

1. I've read a few different versions of how to keep inputs and labels lined up, but for now I'm nesting them. I've heard this is less flexible but right now, it's easier for me to understand.
1. If you use VSCode, type ! and 'tab' in any blank HTML file and the editor will write out boilerplate for you. So. Helpful.
1. Navigation is a tough thing. The example I found above comes from CSS Tricks [^3], and I honestly don't understand it that much. Learning to write good nav styling is a dark art for me, right now, but it's definitely a rock to chip away at.
1. When people write 'mobile first', what they mean is that the initial CSS they write styles the page as if it were on a mobile (your browser can do this easily in the inspection pane). Then, you write media queries FOR SCREEN SIZES ABOVE A CERTAIN WIDTH. This blew my mind. Nobody had ever explained this to me.
1. Deciding what to name your containers, rows, columns, and the structural elements of your page is a much more complicated topic than I thought. You should be writing code to be accessible to everyone, regardless of how they use your site, and proper naming and use of aria is key. I haven't done that in my shitty first draft, but it's on the list for less-shitty second draft.
1. I still hate CSS, but after this part of the process, I'm at least feeling like my goals are clearer.

## What I've learned so far that I didn't know
## What I've made with it, first draft
## What comes next, and open questions I still have

### Resources
https://css-tricks.com/solved-with-css-dropdown-menus/ [^3]
https://css-tricks.com/snippets/css/a-guide-to-flexbox/ [^3]
https://www.taniarascia.com/tags/css/ [^1]
https://thoughtbot.com/upcase/ [^2]