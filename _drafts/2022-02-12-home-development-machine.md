---
layout: post
title:  Creating A Home Development Machine
date:   2022-02-12 07:56:11 -0500
categories: raspberry-pi server home
---

You need a home server for practicing as a web developer. I stand by this, while I agree that gaining certifications for AWS/GCP are really good for resume building, the reality of services like those is that they can cost a lot of money. Moreover, for me the biggest issue is that in addition to costing a lot, the costs can be _variable_ and **unpredictable** (when you forget, or spin up some EC2 instance that is WAY too big for your needs, or if you hit the lottery and hackernews comes as slashdots your site). In addition, there's a lot of learning that can be done when you break down those services into what they actually _are_.

Take an EC2 instance for example. What does that mean, exactly? Or RDS? What is the nuts and bolts of standing up those services, and how do they actually _talk_ to each other? I don't know about you, but my brain isn't satisfied with truly **understanding** something until I can express it in the simplest terms I know.

So in this post, let's explore what it would take to set up a basic home server setup. For now, we're going to focus on only setting up one machine, that runs one operating system, that can run a few different features that as a web developer you might take for granted or just haven't really thought about how to create them manually.

