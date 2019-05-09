---
layout: post
title:  "Observables in plain f**king English"
date:   2019-02-01 10:15:42 -0500
categories: observables
---

I hate the language of "Observables" in RxJS. I fucking loathe it. I loathe the way it's written in documentation, even if once you've penetrated the idea of it, it seems totally natural.

Here's the way I think about the idea of an "Observable". The basic idea of it is that you have a Subject that contains states that an Subscriber wants to be notified of, ("Observer" might be a better word since it doesn't start with the same letter, but Subscriber has a better meaning). The Subscriber gives the Subject a function, and that function's purpose to take the information it's given a process it in a certain way. The Subject maintains its own state, and whenever that state is updated or changes, it goes down a list of Subscribers and updates them according to how they want to be updated.

Think of it this way. You're trying to quit smoking, or your the kind of person who always bums cigarettes. You've got a friend at the bar you're drinking at who is an unabashed smoker and goes out every so often to smoke. Every time they go out, you want to bum a cigarette (yeah you also want to talk to them, but let's be honest you want your fix).

You are the Subscriber, and the unabashed smoker is the Subject. You give the Subject a function that says, "Every time you go outside to smoke, call/text me that you're going and give me a cigarette. In pseudocode, it might look something like this:

```
    class MoochingFriend:
        
        def __init__(self, friend):
            self.isSmoking = false
            self.hasCigarettes = false
            self.brandInHand = null
            self.guyToBumSmokesFrom = null
            subscribeTo(friend)

        def moochCigarette(cigarette):
            self.isSmoking = true
            self.brandInHand = cigarette
        
        def subscribeTo(friend)
            guyToBumSmokesFrom = friend.subscribe(moochCigarette);
    
    class TooPatientFriend:

        def __init__ (self, cigarettes):
            self.isSmoking = false
            self.hasCigarettes = true
            self.brandInHand = cigarettes
            self.listOfMoochers = []
        
        def subscribe(callback):
            listOfMoochers.append(callback)

        def update():
            for moochers in self.listOfMoochers:
                moochers(self.brandInHand)
        
        while(true):
            if(isSmoking):
                update()

    Anthony = new TooPatientFriend('Marlboro 57s')
    Mike = new MoochingFriend(Anthony)

```

This is rough, of course, but the idea is that whenever Mike comes into existence, he subscribes to Anthony and says, "Hey whenever you go outside to smoke, let me know and give me a cigarette". The nice thing about this relationship is that from Mike's perspective, he doesn't have to bother Anthony every five minutes to see if he's going outside to have a cig, he just gives Anthony a way to contact him and when he goes out, he'll let him know.

From your perspective as a developer, think of the Subject as any service which takes time to complete, but there are dependent parts of the code that want to take information from it periodically (say, when that information is ready). The Subject goes off and does its thing, getting the data, parsing it, waiting for network requests to complete etc., and the Subscriber just waits patiently, confident that when the data is complete, the Subject will let it know and pass it back in the way the Subscriber wants.