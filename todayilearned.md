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
