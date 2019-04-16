---
layout: post
title:  "Welcome to Jekyll!"
date:   2019-04-15 13:00:00 -0500
categories: css
---
# I Hate CSS, Why Practice It?
Two years ago I attended a bootcamp to become a 'Full Stack Developer'. It was a great introduction into the work (mostly) of a front-end developer. Since then I've spent a year in my first developer role, and my understanding of what it means to write a web app has grown tremendously.

Except for CSS.

When I style our app it still feels largely as if I'm guessing at how things work and using a lot of trial and error until I eventually stumble on a right way. This isn't my biggest concern since design and front-end work isn't where I want to go as a  developer. But it's still a source of concern that I cannot explain how to take a drawing of a web app and ~~~stumble~~~ towards an solution which (somewhat) resembles it. Even if I never become a great designer or auteur, I still want to be a step above a  monkey banging on a keyboard.

## The State Of CSS Tutorials
![Draw the rest of the fucking owl](/assets/fuckingowl.png)

[This subreddit](https://www.reddit.com/r/restofthefuckingowl/) is my CSS spirit animal. I've read many tutorials on styling in CSS. Here's a good template for writing your own shitty CSS tutorial:

1. Draw a picture of a perfect web app view (preferably in Photoshop which you cannot afford or would use ONCE and forget)
1. Draw colored borders around "semantic elements" of that view (oh and then NEVER USE COLORED BORDERS AGAIN)
1. Write some HTML with all those elements one after another. Give them arbitrary 'div' and 'class' names and don't ever think about accessibility (just mention it in passing)
1. Link to Bootstrap/Semantic/Material framework CDN and then name your div's after framework classnames but don't explain any of the thousand other classes or features (bonus points if you tell them IT'S SO EASY)
    * Or, make your users run npm init and then install bootstrap 4 and all its dependencies
1. Ignore the bloat that comes with having to load tons of CSS and JS you'll never use
1. ????
1. Profit!

My problem with this way of learning is that your audience doesn't learn anything about what it takes to write a CSS framework (hell it took me 6 months to really understand what 'framework' MEANS) and you've contributed to more people overusing complicated software for really simple web apps.

I have found a few resources whose authors have really tried to break down this question of styling a simple web app and I wanted to list them here and thank them. Notable [Tania Rascia](https://www.taniarascia.com/tags/css/) [^1] who wrote a stunning piece on rolling your own framework, and the good people at [Thoughtbot](https://thoughtbot.com/upcase/) [^2] for doing a few videos on how you can achieve a lot with just plain CSS and no JavaScript (not everything, though). All of [CSS Tricks](https://css-tricks.com/)[^3] for just having any possible GOOD tutorial you could ask for. [Lindsey Kopacz](https://www.a11ywithlindsey.com/)[^5] for great examples of writing for accessibility.

My goal with this series is to "Draw the rest of the fucking owl" and show you, in as much detail as I know it, how to write your own CSS, create a general process for rolling custom CSS, perhaps write your own framework for your projects (thanks, Tania), and show you all of my drafts from shitty first to polished nth.

## My process for learning CSS
At a high level, I read a lot, I write a lot of notes (by hand), and then I make a lot of shitty drafts until something comes out good. Then I write (by hand) what I did, try to generalize it, do it again and again until it's not shitty. Here is a picture of some of my notes for this project:

![Handwritten notes from a caveman](/assets/exercisejournalnotes.png# thumbnail bordered)

My first step is drawing by hand what I want my view to look like. I like drawing on graph paper so that I can line everything up, draw arrows indicating the rough sizes of things, and start to think about which parts need their own columns or rows. Also, for my level of dedication, finding a new piece of software to mockup my sites is just another thing I have to learn, and I have too many of those already.

Next I start by thinking 'logically' about what parts I need. What semantic HTML tags do I need to describe the pieces of my view? What organization of these tags will be best styled and layed out? This is a tricky step and I'll be honest with the view I've done for this post, I tweaked it about a half dozen times. I'm still not sure if it's a good layout. I don't know if there are any better ways to learn this. Make a lot of views, read other people's HTML and write notes on what those people say. That's the best I've got.

Then I code up the HTML. I just want to get all the elements in the file, with some dummy data or text, regardless of how they show up. This is what I ended up with after a few different tweaks:

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

My last step then is going into the belly of the beast. I link a stylesheet to my view, and I start writing CSS to style this monstrosity.

tl;dr, Draw it by hand, split the drawing up into 'pieces', write HTML, make a stylesheet ~~and close the window and never speak of this again~~

## A Checklist-based Approach to CSS for people with zero patience

Now on to the main attraction. To start I must write a disclaimer on this part. I've only sort of started to understand what I'm doing here. I copy-pasted a lot of the code for the Navigation bar, and I know there are huge portions of this stylesheet which are probably repetitive, useless, or just bad.

But here is my process:

1. Establish your foundation
    * Define a viewport (THANKS VSCODE BOILERPLATE!), include a [browser reset](http://www.pitt.edu/~ctomer/lis2600/css_reset/index.html), reset everything to using border box, and _maybe_ include jQuery.
1. Set breakpoints
    * Mobile first means design FIRST assuming the user is on mobile. Set 'min-width' breakpoints, and only restyle elements that will change. Focus on how content looks, not on which devices will be used.
1. Define the larger structure
    * Use flexbox for one-dimensional layouts (think Instagram), and Grid for two-dimensional layouts, (think desktop). You don't need a grid system. You can make your own (ask Tania). Give your rows and columns semantic names for what they actually contain.
1. Pick an item and style it
    * Go down your HTML and pick one item after another and style it to fit your goal. This stage is a lot easier if you create useful semantic groups for your HTML, and think about them in your grid. Expect to rewrite HTML at this stage.
    * A good way to think of it is going to the CSS Tricks tutorial above, and anywhere they have a blank box, ask yourself, "What portion of my view can I put inside there?"
1. Navigation is hard
    * I don't have much good advice here. Study CSS Tricks and whoever else provides a guide (here are a [bunch](http://responsivenavigation.net/)), and keep hammering away at them until you understand. That's the stage I'm at.
1. Last Step: Don't do the above steps for more than a few hours (ideally more than one hour) per day when you're starting out.
    * Seriously, give yourself a break, take this one day at a time, and go work on other code you're more comfortable with. Learning isn't a sprint, it's a marathon and you need to pace yourself.
    * However once you get good, you'll start to notice that things which took you a lot of time are fast, and you don't notice the clock as much or you find you don't fatigue as easily. This is a good sign.

If this still seems vague to you, then part of your process should be copying this down and making it less vague for yourself. Summarize it. Watch yourself when you code and summarize what you do. Only you know what is specific or unclear for yourself, and what works for my brain might not with yours. Write it out by hand, at first.

Here, is the current version of my stylesheet.

```
/**
*Meyer's Reset
*
*/
html {
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: inherit;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
}

header {
    width: 100%;
    margin: 0 auto;
    background: teal;
}

header>h1 {
    text-align: center;
    font-size: 3em;
}

nav {
    background: orange;
    font-size: 1.25em;
}


ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
}

li{
    display: block;
    transition-duration: 0.5s;
}

li:hover {
    cursor: pointer;
}


ul li:hover > ul,
ul li:focus-within > ul,
ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}

ul li ul li {
  clear: both;
  width: 100%;
}

ul li ul {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    transition: all 0.5 ease;
    left: 0;
    display: none;
    background: orange;
}

main {
    width: 100%;
    margin: auto;
}

form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
}


time {
    text-align: center;
    font-size: 2em;
}
```

(As an aside if you're thinking "Why didn't he just link this to github?" this is my answer. First, linking breaks the flow of reading and is an easy source for distraction, and I'm personally trying to minimize that. Two, who knows if that github link will be good in the future, and I want to future-proof this post as much as I can.)

## What I've learned so far that I didn't know before

1. I've read a few different versions of how to keep inputs and labels lined up, but for now I'm nesting them. I've heard this is less flexible but right now, it's easier for me to understand.
1. If you use VSCode, type ! and 'tab' in any blank HTML file and the editor will write out boilerplate for you. So. Helpful.
1. Navigation is a tough thing. The example I found above comes from CSS Tricks [^3], and I honestly don't understand it that much. Learning to write good nav styling is a dark art for me right now.
1. When people write 'mobile first', what they mean is that the initial CSS they write styles the page as if it were on a mobile (your browser can do this easily in the developer tools). You write media queries FOR SCREEN SIZES ABOVE A CERTAIN WIDTH. This blew my mind. Nobody had ever explained this to me.
1. Deciding what to name your containers, rows, columns, and the structural elements of your page is a much more complicated topic than I thought. You should be writing code to be accessible to everyone, regardless of how they use your site, and proper naming and use of aria is key. I haven't done that in my shitty first draft, but it's on the list for less-shitty second draft.
1. I still hate CSS, but after this I'm at least feeling like my goals are clearer.

## What I've made with it, first draft

So this is what I have so far. It's an ugly baby, but it's MY ugly baby, damnit.

![My shitty first draft CSS layout](/assets/mygarbage.png# thumbnail border)

Looking at it I'm proud that I it is roughly the right layout that I want. The sizes of the components is close, and while the inputs don't line up, they're at least on their own lines. I haven't expanded my view to be desktop sized so I don't know what will break, but that's for shitty draft number two.

## What comes next, and open questions I still have

I have many, many, open questions, but here I'll try and address the big ones. In my next entry for this series, I'll try and come back with some answers to those questions, as well as a better version of the shitty first draft above.

1. None of the form elements line up on my first draft. But how do I want them to line up, and how do I make that happen? Which HTML element should I focus on?
1. What kinds of colors do I want my view to have? These would be colors for the whole page itself.
1. How do I make it a bit softer and rounder? All the elements are plain-jane and pointy, and I like things a bit softer and more inviting.
1. Converting this page to use a front-end framework (Angular, React, Vue, etc.) is my ultimate goal, and I want to have the pieces be easily converted to that. How can I plan for this?
1. What kind of checklist can I make for myself to catch the biggest accessibility pitfalls? I would like it to be completely accessible, but for now I'll settle for 90% of the way there (I should go read [Lindsey Kopacz](https://www.a11ywithlindsey.com/)[^5])
1. How do I pick fonts? 
1. Once the viewport is no longer mobile-sized, do I have to abandon flexbox since my layout will be two dimensional?
1. ~~~will I ever love again~~~
1. Last question, how can I take this process and push myself further with it? Just repeating the same design I originally came up with isn't going to cut it. What kinds of designs have I seen and thought were mysterious black magic that I should now try to reproduce?


## Resources
https://www.taniarascia.com/tags/css/ [^1]

https://thoughtbot.com/upcase/ [^2]

https://css-tricks.com/solved-with-css-dropdown-menus/ [^3]

https://css-tricks.com/snippets/css/a-guide-to-flexbox/ [^3]

http://responsivenavigation.net/ [^4]

https://www.a11ywithlindsey.com/ [^5]