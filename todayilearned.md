---
layout: page
title: til
permalink: /til/
---
# TIL
A collection of concise write-ups on small things I've learned in a day in different languages, techniques and environments. These things don't require a complete post, but are interesting or new for me. This guide is based off of [this wonderful idea](https://github.com/jbranchaud/til)

# Categories
* [PostgreSQL](#postgresql)

# PostgresSQL
1. Use the built in function to_date(_INPUT_,_FORMAT_) to turn a string into a date object [link](https://www.postgresql.org/message-id/bf54be870702020545p1d755059g2f6a5d2cbb78ab59@mail.gmail.com)
1. You can change a column's data type [after the fact](https://stackoverflow.com/questions/24308239/postgresql-integer-out-of-range)
1. When storing values of currency, DO NOT use floats because of risk of rounding errors. Use [currency](https://rietta.com/blog/postgresql-currency-types/) data type

# Data Structures
1. Are Sets a contiguous or non-contiguous data structure? [Non-contiguous](https://stackoverflow.com/questions/14384668/is-stdunordered-set-contiguous-like-stdvector)

# C++
1. A data structure is said to be 'memory stable' when the reference to an element is valid even when adding or removing other elements [link](https://stackoverflow.com/questions/14384668/is-stdunordered-set-contiguous-like-stdvector)

# Python
1. How are Python's Build In Dictionaries Implemented? [link](https://stackoverflow.com/questions/327311/how-are-pythons-built-in-dictionaries-implemented)

# Open Questions
1. One of my colleagues chose to fork a package from NPM to solve an issue we had in the code (here is the [link](https://www.npmjs.com/package/ng-image-load) to the repo). Why would you fork the repo instead of just install it as a dependency? How does one fork a github repo and then incorporate it into the main codebase?

1. How do you install a local version of Wordpress and Elementor for learning and playing with the software?