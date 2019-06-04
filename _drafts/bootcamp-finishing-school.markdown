# Goal: Finish Bootcamp
The goal is to write a book, and potentially a course, on _finishing_ the work that many bootcamps start. Speaking from the perspective of my bootcamp, the primary thing we were taught was the creation of web frontends. There was little training on the creation of backends, and especially almost NO training on proper deployment of backends and on creating robust web applications.

* *Book 1*: Goal would be to hand this book to a recent bootcamp grad, and have them use it as a reference for starting their very own web app within a few hours. Go from 'Create-react-app' and 'npm init -y' to deployment within a matter of HOURS, not DAYS or WEEKS.

* *Book 2*: The goal is to give them a guide on how to automate the nitty gritty parts of adding to their app so they can focus on larger questions of purpose and structure.

* *Book 3*: The goal is to take them to the big leagues.

## Motivations:
You've got this (fairly not terrible) idea for a simple web app you want to put online. Maybe you want to add to your portfolio? Maybe you want to create an MVP for a contract? Maybe you want to make an MVP for an idea of your own? Maybe you want to just put something up for the lulz. You know how to make a basic frontend and can serve it through the Angular/React/Vue/Svelte development server locally. You can make a _passing_ backend in Django/Flask/Go-chi/Node-Express, which can serve up static files, has some sort of backend API for services, and has some sort of database (Mongo/Postgres).

The goal with this isn't so much to tell you _specifically_, platform by platform what to do. The goal is to give you a language, and a general checklist, on what you _need_ to do to get the web app running, and to give you a vocabulary with which to ask questions.

_Text to Mark Poko on Slack_

He sort of glosses over the first part, how do I get that first application deployed, manually, and what vocabulary do I need to ask questions based on the deployment service I use. His point about "Learn to do it manually FIRST, then automate it" is well heard

So the goal for my first little small book would be to get to that first point. "Hey bootcamp grad, remember all that stuff Heroku sort of glossed over for you? Let's go over it. Oh and you've never used a Mac or Linux before? Yeah we'll get you up to speed on what everyone is talking about."

Also to give people a LANGUAGE with which to ask questions on stackoverflow. This is a big thing I've noticed which really transformed my work. Once I could phrase my question with the proper language, Google searches became actually productive

# Book Notes

## Prerequisites:
* You have a basic web app. -- I don't are if it's just a static site from Gatsby, or you just ran create-react-app and wanted to deploy _that_. Also, you have some semblance of a WSGI (a web server) which can serve up some basic things through an API. Great! You've got enough to do this.
* (Possible Prerequisite) -- You have enough understanding of *nix commands to do the following: 1) Navigate the filesystem, 2) copy, move, create, and delete files 3) set permissions for files 4) you've at least heard of curl commands, 5) you know the basics of git (no other version control systems will be covered here, period), and lastly 6) no programming concepts will be explained because you understand the concept of variables, control structures, and data structures. This is NOT a programming book. Think of it more like a Haynes Manual for putting your '94 Camry back together.

## Outline:
1. 10,000m view of the process and parts
1. Enough Internet Networking to understand what's going on
1. Enough *nix to be dangerous and ask good questions
    1. Environments, setting them
    1. Some bash scripting, and resources for more
1. Enough database initialization to get you started
1. File structures: a SUPER opinionated guide to get you started
1. Going through the process, manually, _once_
1. What are task runners, and why do I need one?
1. IT'S LOGS, IT'S LOGS, IT'S BETTER THAN BAD, IT'S GREAT (think Ren and Stimpy)
1. Setting up backups so you don't cry like Charlton Heston when HN shows up (planet of the apes)
1. Where to go from here?

## End/Appendix
1. Checklist for getting going
1. What Vocabulary do I need to ask questions about this stuff?
1. Small Questions FAQ

## Reference Material
[Python seems to do this guide stuff well](https://www.fullstackpython.com/deployment.html). This is probably the single most important resource I've found, yet.


* [Tech In 500 Lines](https://github.com/aosabook/500lines)
* [What's In A Production Web Appliation?](https://stephenmann.io/post/whats-in-a-production-web-application/)
* [Reddit Post on Above](https://old.reddit.com/r/programming/comments/9ak04f/whats_in_a_production_web_application/)
* [Deploying a Vue app to Heroku](https://medium.com/netscape/deploying-a-vue-js-2-x-app-to-heroku-in-5-steps-tutorial-a69845ace489)
* [Create and Use bash scripts](https://www.taniarascia.com/how-to-create-and-use-bash-scripts/)
* [Deploying Flask Services](http://flask.pocoo.org/docs/1.0/deploying/)
* [Top Ten Frameworks based on _absolutely no research??_](https://hackr.io/blog/top-10-web-development-frameworks-in-2019)
* [This](https://vsupalov.com/deployment-intro/) looks like a good overview
* [A beginner's story](https://www.freecodecamp.org/news/lessons-learned-from-deploying-my-first-full-stack-web-application-34f94ec0a286/) of deploying a web app. Six weeks??? That's ridiculous.
* [Best practices](https://platform.sh/blog/what-is-best-practice-in-web-application-deployment/) for deploying a web app. Not a bad guide, but not in depth.
* [Good resource](https://unixism.net/2019/04/linux-applications-performance-introduction/), even if it's not exactly focused for this task/book
* [Deployment with Node](https://blog.bitsrc.io/a-beginners-guide-to-server-side-web-development-with-node-js-17385da09f93) because we are not restricting ourselves to Python-only
* [Totally unrelated](https://www.freecodecamp.org/news/how-to-build-a-blazing-fast-graphql-api-with-node-js-mongodb-and-fastify-77fd5acd2998/)
* Learn manual deployment _first_, then go to Docker


# Open Questions and Isolated Ideas

## For this book
1. What sort of narrative structure do I want this book to have? Is this more of a first-hand account, or more non-fiction computer-book-y?
1. I want to have small asides which are then compiled at the end into an FAQ of sorts
1. Start big and broad, "Here is the general path you'll be taking and here's the process, start to finish" and then go down into "Here's how you do it for a particular tech combination", and the zoom back out to "Here's how you'd ask the questions of how to do this for other tech combinations"

## What's next?
1. Once you've done this book, a sort of "high level overview" of app deployment and automation, go back into your blog and do step-by-step examples meshing every combination of frontend, backend, database and hosting service/tech you can find. The goal THERE is to be a one-stop-reference for as many different ways of doing things as possible.
1. As well, go through different technologies and pierce the veil with what they _actually_ do, and how they relate to similar tech but of different names. Demystify the marketing clutter.
1. Consider doing some sort of basic cost analysis


-------

# Chapter 1: A 10,000 m View Of the Process

## What skill level does this book expect?
    Programming may be your second career, or its your first career but you are still pretty new to it. You might have been through a bootcamp, or perhaps you went through all of a college CS major or minor but you never got around to producing a complete piece of software for anyone other than yourself or a project. If you went through a bootcamp, you found yourself growing by leaps and bounds in terms of your understanding of frontend frameworks (but lets face it, you still don't completely know what this word 'framework' _means_), and you might have set up some basic backend software like a basic web server with some routing. If you found yourself more confused by the dark and mysterious backend because you can't easily see it, then you're probably a good candidate for this book. You also might have just barely used a database and you heard the term ORM at least a few times. Your teacher showed you how to set up a database locally, but the whole lesson was only a few hours, they barely had enough time for you, and you did more copy-pasting off of stackoverflow than actually manually _writing_ code. You have done a fair bit of "Learn React in 90 seconds!!!" tutorials but they always seem to gloss over a lot of details. You've been to /r/restofthef**kingowl and thought "Hey this is just like learning to code with modern clickbait resources!"

    You have some ideas for small projects you want to put online. But you don't know how to get from 'create-react-app' to posting on hackernews. Maybe you have tried a few guides on using Heroku because that's what you hosted your app on at your bootcamp or in college. Maybe you _tried_ showing everyone your awesome idea on your Heroku app, but don't know why it crashed and how you can beef it up for lots of people to see. Maybe you even have a potentially _lucrative_ idea, but again you don't know how to securely bring it to market.

    You would describe yourself as an "Advanced Beginner". You can make fairly complex user interfaces or you can modify an existing user interface really well. Your understanding of backend servers is passing but you wouldn't know where to start in making something robust or production grade. 
* What is the goal of this book/long guide?
* What is a web app?
* What are the big parts to any web app?
* What does 'deploying' mean and when do we know it's _done_?