---
layout: post
title:  "Write to Learn"
date:   2019-03-11 03:30:00 -0500
categories: blog
---
“I Hear and I Forget, I See and I Remember, I Do and I Understand” -_someone_

One topic I will never understand is CSS. To be fair, I don't think I _can't_ understand CSS, nor do I think it wouldn't be useful. What I mean is that I don't _care_ enough to put the effort in. When I taught, I would say this to my students (and I'm certain it came off as condescending but I don't care), that it's alright to say, "Yeah this doesn't matter to me", but being honest with yourself about what does and doesn't matter is important. To me it is, at least.

Today I learned that I can really easily set up a form of end-to-end testing using Postman, (Newman is the CLI tool associated with Postman). I can write up API queries in Postman, script in some test conditions to be met after the request is finished (or before the request is run), and then export a set of tests as a JSON file to be fed into Newman. Newman can then be set up to run these tests at specific points in a build, and verify that an API is working and giving expected results.

This stuck with me, so much so that I'm quite excited even now just writing this. I can easily craft enough tests to go through every major flow of our app, and test that the API is responding properly. If we actually modified this server this could be the start of a killer test set.

This weekend I also learned of three distinct options for reading and parsing a PDF file for which the user needs to extract data over multiple files. Amazon has an option (which isn't _quite_ available yet), a paid third-party option exists, and there are a few Python libraries which could do the job. It would take a bit of fiddling to get it to work but I'm fairly sure it's do-able. To add, I've started reading how this sort of task could be turned into a service, how to stand up an API and implement authentication credentials so only certain users can submit files as well as templates, and then have the data fed back to them.

Finally, I tooled around with CSS for a view for our app. This. Was. Hateful. When I find myself working within someone else's framework for CSS, or even just my own, it all feels mystical and strange. It makes absolutely no sense, it doesn't behave consistently, and files from other parts will overwrite the CSS I am writing in unpredictable ways so I can't even tell if what I'm doing will _work_. I come away from it knowing nothing more, just glad that the ordeal is over for now.

Look for the signs of caring in your work. What are the topics you think about, go home and research on your off time, or find yourself planning out what you'll do next. These are the things *you care about*, and it's good to identify them. But those things you don't like, that you just try and get through with the least amount of emotional output. Those are things you *don't* care about, and it's also good to identify them. Knowing what does and doesn't matter drives you to seek out the former and minimize the latter.
