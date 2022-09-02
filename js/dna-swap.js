// an object containing all possible pairs
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  // returns a new array with the appropriate paired letter 
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}