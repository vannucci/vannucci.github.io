---
title: "Learning Hashmaps: Bijective"
description: ""
pubDate: "June 28 2024"
---

## Hashmaps

Studying a bit on hashmaps, it occurred to me with [Leetcode 205](https://leetcode.com/problems/isomorphic-strings/description/) that a basic hashmap is unidirectional. Meaning, it can map items from one set onto another, but it doesn't inherently give us a mechanism to go _backwards_. Your basic hashmap is **injective**, as shown in this picture:

![A visual guide to what is an injective function and what is not an injective function](https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/injective-function-1629606545.png)
_borrowed from here:_ [url](https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/injective-function-1629606545.png_)

I figured the best way to do this was simply _two_ hashmaps, each that pointed from one set to the other, and then check them at the same time. Example below:

```ts
function isIsomorphic(s: string, t: string): boolean {
  let answer: boolean = true;
  const sArray = s.split("");
  const tArray = t.split("");
  let mapSontoT = {};
  let mapTontoS = {};

  for (let i = 0; i < s.length; i++) {
    if (
      !mapSontoT.hasOwnProperty(sArray[i]) &&
      !mapTontoS.hasOwnProperty(tArray[i])
    ) {
      mapSontoT[sArray[i]] = tArray[i];
      mapTontoS[tArray[i]] = sArray[i];
      continue;
    } else if (mapSontoT[sArray[i]] !== tArray[i]) {
      answer = false;
      break;
    } else if (mapTontoS[tArray[i]] !== sArray[i]) {
      answer = false;
      break;
    }
  }

  return answer;
}
```

Also here are some of the [other](https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array) [random](https://www.reddit.com/r/typescript/comments/yxwx38/how_to_use_an_object_as_a_hashmap_during/) resources I used, specifically how to actually implement a hashmap in JS. Please, future me, do _NOT_ forget that `hasOwnProperty` exists as a method on objects.
