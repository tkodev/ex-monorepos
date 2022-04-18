// polyfill
  console.log([1, 2, 3].includes(2)) // true
  console.log([1, 2, 3].includes(4)) // false

// Check promise
  new Promise( r => {r('promise resolve')}).then(d=>console.log(d))

// Check set
  const set = new Set(['a', 'b', 'c'])

export {set}
