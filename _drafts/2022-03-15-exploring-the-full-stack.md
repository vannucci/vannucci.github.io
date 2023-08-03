---
layout: post
title:  Exploring The Full Stack
date:   2022-03-15 18:48:11 -0400
categories: fullstack web-dev
---

# What does it mean to start a web app project, generally and specifically?

Since I've been working in what some might call a "full stack web developer" capacity, I'll focus on that. When I've heard someone ask, "Can we make a web app to do XYZ task?" by this point I start to think about some layers to this. Layers, in my mind, mean different pieces of code that run in different computers, with some kind of communication protocol that runs between them.

Let's talk about some of those layers, and some of their communication protocols:

1. Frontend: This usually consists of some sort of HTML/CSS markup to draw images on a browser window, along with some JS to make them animate, change what is seen on the screen, or to initiate communication or maintain a "state" or a local data as to what should be shown.

2. Backend: This is another piece of code, running usually on what's called a server, that doesn't render any HTML/CSS, and acts as a way of serving up the frontend, interacting with a database to store data in a longer term manner, and communicating that data to the frontend so that the user can interact with it.

3. Database: This is yet another piece of code which stores data in an organized way. Often, a database is the heart of any application, since how it looks (frontend) or even how it's managed (backend) isn't as valuable as the data itself.

4. Infrastructure: This part is usually code that isn't "running" in the same sense as the above parts, but is what we use to define the needed resources to run the above services. Think of this as saying, "I need a computer, with this operating system, these resources, connected in this way". Infrastructure is often overlooked in many beginner guides since this can be an entire discipline unto itself and can get very complicated in a hurry.

Depending on who you talk to, each of these parts above can be considered the "most important" part of any given web application. But all are essential in their own way, just like saying that a car needs four wheels to be able to drive, a web application needs all four of these parts in order to actually be of value to a customer and an organization. In this series, we're going to devise a project for ourselves that involves all of these parts by necessity, and go through thinking about each of them, what our needs are, and what our limitations are.

## Needs and Limitations

In the amateur pilot hobby, there's a saying, "Define your mission". What this means is to ask yourself some starting questions about the potential usage of your needs as a hobby pilot. Do you want to become a commercial airline pilot? Do you want to maybe use your aircraft as a commuting vehicle? Or do you simply want to get up in the air, do some laps of your local community and enjoy the experience of solo flight? These are critically important questions when setting out to learn how to fly so that you know where your priorities are, what your goals are, and whether or not you have the resources needed to achieve these goals.

The same goes for any software development. Say you want a bit of software to help you store photographs of your family and friends that isn't on Facebook or Instagram so that you have full ownership of your data. Does rolling your own software make sense, or are there existing platforms you can use already? Do those existing platforms have the features you want? If they don't, is it possible to just write a bit of software to extend their functionality to do what you want?

If all of these questions may sound daunting that's okay, you're not alone in feeling that the process of bringing a tool to life or up to a useful state can be a lot of work. This is why services like FB and Insta are really powerful and useful to people: they abstract away a lot of questions that are difficult to answer. The downside to these services it that they require you as the user sign an agreement to give them a lot of power and control. So part of "defining your mission" must include this question. "How much control am I willing to surrender in order to achieve my goals?"

## Proposed Project

In the case of our pet project, we want as much control as possible since our mission here is to learn as much of all of the above listed technologies as possible. Our mission, in a word, is "learning". We don't care about things like "will this app have 99.999% uptime for thousands of user requests every second", we care that we have uptime whenever we decide to turn the service on, and there will likely be just one or two users that ever interact with the system at all. What we're after here is to learn about each of the components of a modern web application.

So in my mind, a simple inventory management app could be a good small project for getting to know all these systems with. The frontend would consist of a login splashpage, a view 

