# Questions or Things Learned Daily at Web and Client Services at Wakefern


## Potential Self-Interrogation Questions?
1. When would an AngularJS Directive be appropriate? (ANS: When a DOM element (HTML) must be modified under particular circumstances).

## Open Questions
1. 

## AngularJS
1. How do you create a new directive in SR Mobile?
This is an example of the new defaultImage directive to give product tiles a default image when one is not loaded.
```
/* eslint-disable linebreak-style */
/* eslint new-cap: 0 */
define(['APP_CONFIG'], function(APP_CONFIG) {
    'use strict';

    function defaultImage() {
        return {
            link: function(scope, element, attrs) {
                element.bind('error', function() {
                    element.attr('src', `assets/images/${APP_CONFIG.assetPath}/default_product.jpg`); // set default image
                });
            }
        };
    }

    return defaultImage;
}); 
```

Then it must be registered in shopRite.js
```
    'directives/defaultImage', 
    ...
    defaultImageDirective, 
    shopRite.directive('defaultImage', defaultImageDirective);
```

1. What is an AngularJS Directive?

From [this](https://www.tutorialsteacher.com/angularjs/angularjs-directives) link:

> Directives are markers on a DOM element that tell AngularJS to attach a specified behavior to that DOM element or even transform the DOM element and its children. In short, it extends the HTML. Most of the directives in AngularJS are starting with ng- where ng stands for Angular.

These are basically HTML extensions which AngularJS attaches. So, if you want custom images on a give img tag.

I don't completely understand the syntax of:

```
return {
    link: function() {...}
}
```
So that's an open question.