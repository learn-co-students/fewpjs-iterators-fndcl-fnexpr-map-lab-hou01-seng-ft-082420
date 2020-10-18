const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let new_tutorials = tutorials.map(function(tutorial) {
    let splitted = tutorial.split(" ")
    let result = []
    for(const w of splitted) {
      let w1 = w.slice(1)
      let w2 = w.slice(0, 1).toUpperCase()
      let w3 = w2 + w1
      result.push(w3)
    }
    return result.join(' ')
  })

  return new_tutorials
}

