---
layout: post
title:  "TypeScript -- Object and Variable Assignment"
date:   2019-08-07 15:00:42 -0500
categories: typescript
---

I'm learning TypeScript and trying to figure out techniques I've used in JavaScript which the TypeScript checker will or will not allow me to do. Here's an example of something I've done in JS many times before, that TS doesn't like.

```
var someObject = {};

if(!someObject.bar) {
    someObject.bar = 'Initialized';
}

//do something else
```

The idea here is to tell JS "Hey, check if this property exists on this object. If it doesn't, add it in, and then do something with it." I've done this in cases where I'm consuming an object from somewhere else, and I know there's a property I'll need down the line, but either it hasn't been created or hasn't been initialized.

Now TypeScript will _sort of_ not allow this. Let's take the case where I assign `someObject` with the type when I create it.

```
//Create an interface for my object
interface Foo {
    bar: number;
    bas: string;
}

var someObject: Foo;

if(!someObject.bar) {
    someObject.bar = 123;
}

//do something else

```

**This** will have an error thrown by the linter/transpiler. It will tell you that 'someObject' is used before being assigned. Fair enough, the if statement is indeed trying to use it, so that's a problem. Speaking with a colleague of mine who uses TS daily, he tells me that "TypeScript will check if that property is initialized for you, that's part of what it does automatically".

But what about _this_ scenario?

```
interface Foo {
    bar: number;
    bas: string;
}

//this is an assertion
var someObject = {} as Foo;

console.log(someObject.bar);

if(!someObject.bar) {
    someObject.bar = 123;
}

//do something else
```

In this case, because someObject is being assigned to an Object which is asserted to be type Foo, TS doesn't seem to care. It will happily let me check for whether someObject.bar exists, and if it doesn't it won't fail. Even the console.log will report that it is `undefined` and seems fine with that.

I've Googled a bit for this question but it seems hard to pin down, and the best I could do is [this](https://stackoverflow.com/questions/23412033/typescript-interface-initialization).

My conclusion is that TS isn't quite as concerned about you misusing type asserted objects, but it deeply distrustful of not initializing properties of an object where type is assigned. Furthermore, I must be misinterpreting the `?` keyword on interfaces, because it was also complaining to me that I didn't initialize the `?` field when I did it above.

Neat!