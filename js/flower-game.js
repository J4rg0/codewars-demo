const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYou(n) {
    // modulus of n will equal the index of correct phrase
     console.log((n-1) % phrases.length)
     return phrases[(n - 1) % phrases.length] 
}

howMuchILoveYou(3)
howMuchILoveYou(6)
howMuchILoveYou(8)
howMuchILoveYou(156)
