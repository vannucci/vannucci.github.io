---
layout: post
title:  "First Impressions -- TypeScript"
date:   2019-08-02 15:00:42 -0500
categories: typescript
---

## THINGS I DON'T GET
_Duck Typing_, or "Here's a type system, but it's TOTALLY COOL if you fudge it once in a while. Good luck trying to figure out which of the things you thought were SO WELL TYPED are actually not being passed correctly."

_Type Errors Do Not Prevent JS Emit_, or "Hey so we weren't that serious about making you do types, here's our best attempt at JS but it's all computer generated so it's kind of hard to read and GL with that. Also I'll still throw errors, even if your JS is correct, and that'll bother you until you die."

_Types can be implicit_, or "Yeah so this is _sort of_ like JS in a way, except instead of finding the errors at runtime in bizarre situations, you'll find them at 'transpile' time and catch them a little earlier. Why don't you just use the explicit typing we worked so hard to give you?"

## THINGS I TOTALLY GET
_Function Signatures_, or "Hey let's just give you actual function signatures and sort-of contracts because you're a big boy language now and you really need to stop accepting literally everything".

![A weird Canadian PSA about not putting things in your mouth. I'm looking at you, JavaScript functions](/assets/dontputitinyourmouth.jpg)

_Explicit Types_, or "Again why has it taken you this long to come to terms with this? You've handled my credit card data, FFS."

