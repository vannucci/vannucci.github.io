---
layout: post
title:  "When I Learned To Love Git"
date:   2019-03-04 10:55:00 -0500
categories: git version-control
---
 

---
layout: post
title:  "When I Learned To Love Git"
date:   2019-03-04 10:55:00 -0500
categories: git version-control
---
Let me tell you a story of the exact moment I fell completely in love with git. First, a bit of background.

I have been coding professionally for about a year now. Before this I had worked on some projects with other people and had used git for version control. I understood in an abstract sense that git was great for working with others and I had been taught that undoing your work was simple. I slowly grokked the first point with every pull request and every struggle with merge conflicts.

That was all good. As a tool went I liked it well enough. I knew I had to get better at certain things like rebasing and conflicts, as well as learning the idiosyncracies of git such as binary files not working and writing gitignore files. Git was fine. It was there and it did its job.

Today, git saved me.

I had worked on a feature for about a two weeks and over time the ticket blew up. At its heart it was a simple option addition to a series of views for ecommerce checkout. This option showed up in a few edge cases, but once it showed up it could not be ignored. So I did my thing and brought it to the point that it worked* (well not really, but I wouldn't know that until later. That failure is not part of the story).

Many people not directly involved with the code-writing part got on and started talking about interface changes. This was a there were many wireframes drawn up and even a few words were said on the process of remaking the entire checkout look and flow. Way beyond the original scope of the ticket. But, I did what I was asked or even told to do since I was the main dev on this.

My boss, realizing what had happened put the brakes on the whole thing and told me, "Do the original work, ignore all the UI changes; we'll come back to those at a later date." Okay, fine, not a problem. I'm not a graphic designer and I don't much care for interface design either so I had little stake in this. I tried to roll back my work based on where I was in my commit history, but this failed over and over and I was losing hope that this would be a simple process.

Cue Monday morning: the Day to Go Back.

Now being a new developer I still have a habit of working myself into anxiety spirals that have no basis in reality. "Oh man, this will take me hours to do" or "What if I don't make the exact right change and I have to chase down an errant mistake?" or my favorite "If I copy-pasted the files I need will that still fail?" and so on. The code I had written was way too entangled and it wasn't a straight case of cutting or pasting in old code.

Then an idea occured to me "Isn't there a commit you made when it worked, but you had *not* started messing with the design? Go find that."

There. It. Was. _Hallelujah_.

{% highlight shell %}
$ git checkout 2asf342dassdf234asdfasdfsd32434
{% endhighlight %}

Oh man it WORKED. I was right back where I was when the code worked, but the interface was completely unchanged. I still had about an hours worth of work to add in an API call I needed (_that_ was copy-pasta though, no shame) as well as some minor UI changes to clean it up and a bit of debugging.

Having done that though, I froze. Git informed me that I had a ```Detached HEAD``` and I needed to find a way to tell git that this was where I wanted the new head to be. Consulting my senior dev again, he said, "Try making a new branch with your current changes." Huh. Okay, how about this?

{% highlight shell %}
$ git checkout -b (newbranchname)
{% endhighlight %}

Reader, in that moment I touched the face of God. Git... worked... and it was... divine...

From now on I can say that I know why so many of my colleagues swear by git for version control. I can now say why "Get it to work *THEN* get it to look good" will always be my mantra.

I love git.