# Scrap

Guess a word, or decrypt a word in a known language
How do we score the quality of a guessed word?
Basic probability: Our set is 12,972 words, and a given pattern say, `W E A R Y` could be any of 58 possible words if `W` is correct and in the right spot and `A` is corrent but in the wrong spot. How is that calculated?
"A pattern which is likely to happen gives us very little information, so what it means is that in order to be informative, a guess must be _more unlikely_" That's an interesting idea to unpack.
How do we analyze, for a given word and a given clue pattern, the number of possibilities that that word/clue pattern gives us towards figuring out the right answer?
So we want an equation, E[Informative] = sumOf(p(x)*Something) where Something gives us an idea of objectively how informative that guess/pattern are.


# Basics of Information Theory
For a given space of possibilities, a `bit` of information is defined as an observation which cuts that space in half.
So the information, or number of bits, that a given guess gets us, is `(1/2)^I = p` where p is the probability of that guess (also written as I = -log2(p) because it turns out mathematicians hate fractions)

# Resources
[All English Words](https://github.com/dwyl/english-words)

# App Idea
1. Set up a database containing all English words from this list
2. Provide a GraphQL endpoint that allows the user to query for words based on criteria, ("contains letter", "contains letter at position", "length of word")
3. Expose this endpoint
