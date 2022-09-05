const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYou(n) {
    // remainder of n-1 divided by the total length of phrases will equal the index of correct phrase
     console.log((n-1) % phrases.length);
     console.log(phrases[(n - 1) % phrases.length]);

}

howMuchILoveYou(3)
howMuchILoveYou(6)
howMuchILoveYou(8)
howMuchILoveYou(156)
