import {MyClass} from './check-typescript'
console.log('MyClass.apiVersion: ', MyClass.apiVersion)


import {set} from './check-es6'
set.forEach(
  i => console.log('set', i)
)
