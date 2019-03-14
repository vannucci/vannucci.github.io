---
layout: post
title:  "Work I Am Proud Of"
date:   2019-03-14 14:51:42 -0500
categories: blog
---
I've had some sort of job every year since I was 16 years old. To a certain degree this is standard for many people my age, so it's nothing to brag about. That said, in my newest job as a web developer, I've tried my hardest to succeed and do well, and this week I finally achieved something that means a lot to me.

I created work I was proud of.

It started as a simple feature, "Put this little checkbox on this view and tie it into our backend". Okay, pretty easy. I've done this before. What I didn't know is that it would become a small hell of changing requirements, changing codebase, and lots and *LOTS* of discussions with coworkers and supervisors. Since I'm not trying to grow as a front-end developer or a web designer, the actual look of the finished ticket wasn't of much concern to me.

But with the help of one of my colleagues who is good at this stuff, I learned enough that when the requirements changed I was able to do a decent job making it look good and work well.

What I was proud of was rewriting the controller for this view. While not a complex controller, it had been written many years before and had had a lot of clutter tacked on to it. People would add stuff, and since there isn't much code validation or syntax standards and it got out of hand. It needed a few hacks to make it work. This made reading it much more difficult.

This all came to a head when I was having an asynchronous problem with the controller. It had to fetch a certain amount of data and make sure it was all prepared before the view could be flagged as ready. The way the controller had been written it was anyone's guess as to how it made its calls or set up the view's settings before signaling that all was ready, and in turn my data wasn't rendering well. After a few hours of debugging I called on one of my colleagues to help, and he made some strong suggestions on how to rewrite it. The short version is that I didn't understand how different parts marked 'init' would be executed and what their role was. It turned out that the init portion was what _should_ run once the controller was prepared and did all its background work, and the controller could then be completely started.

With a bit of rewriting, organizing and simplification, this new controller worked on my first test. I was floored. Usually I have to tweak and tune these sorts of things before they work as intended, and this _worked_. I ran a few more tests and sure enough, it was good to go.

To date this is one of my proudest achievements. In the end the feature itself is quite minor, but I was proud to do my part to pay back some of the technical debt this project has incurred over the years, and make the execution of this controller much clearer. It's one of the first times that I felt that I _understood_ how this framework behaves, and could restructure things to make sure that it was all done .