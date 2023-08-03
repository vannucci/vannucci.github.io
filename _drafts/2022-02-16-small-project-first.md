---
layout: post
title:  Make a Small Project First
date:   2022-02-16 15:20:03 -0500
categories: projects side-project
---
# Five Side Project Ideas That Are Small And Can Show Off Skills

1. Eponymous ToDo App
2. A pair writing app
3. Large file sharing app
4. Private chat room
5. Basic survey app

Let's start thinking through the different parts to these apps.

# Parts In Broad Strokes
Broadly speaking most apps have two parts, a frontend which the user interacts with, and a backend which handles calls and does things. These are the two parts covered in many tutorials, to varying degrees of fidelity (frontend tutorials will focus on frameworks like React/Vue/Angular, with some CSS thrown in for good measure, while backend tutorials will talk about standing up an API that can receive calls from localhost).

Let's dive a bit deeper into each of these parts. 

## Backend

First off, a backend is quite useless without any sort of database. This acts as a store for whatever information is important to this app. Speaking broadly of "information" can feel a bit intimidating, but once you start getting into what your app actually _does_, that's when you start thinking about the structure of information. A backend also manages things like authentication and authorization, which answer the question "Are you who you say you are?" and "What can you do in this system?" respectively.

So a backend acts as a your referee for all things you want to do with your database, which at the core stores your information in whatever format is most useful. Information is the core of most apps. It's what your users give you, it's what you display, and it's what in many cases can be monetized.

## Frontend
A frontend is what your user sees. This is typically an HTML page, with some Javascript thrown in there to make it move and do fancy things like validation, changing views and animations. When you tell someone "I work as a web developer" this is likely what they think you do because it's the most easily seen part of any app.

So the backend is your app's view into the world, it's how users _see_ your data, it's how they _input_ their own data, and many times its design or coolness is what keeps them coming back to **use** your app.

## (Hidden) Infrastructure
The infrastructure portion of an app is often hidden and can seem a bit mysterious to first time developers. How is a frontend served up? When I type "www.my-shitty-app.com" into the browser, how does it know where to go? How does the frontend actually _send messages_ to the backend, and how does the backend _actually receive them_ from the world? What are the "best" and most "robust" ways of doing this? How do I mitigate malicious attackers from abusing my system?