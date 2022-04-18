// Check interface work
  interface Foo {
    foo: string
  }
  const a:Foo = {foo:'foo'}
  console.log('hello typescript: ', a.foo)


// Check iterator
  const createIterator = function *(items:any) {
    for (let i=0; i < items.length; i++) {
      yield items[i]
    }
  }
  const iterator = createIterator([1, 2, 3])
  console.log(iterator.next())           // { value: 1, done: false }
  console.log(iterator.next())           // { value: 2, done: false }
  console.log(iterator.next())           // { value: 3, done: false }
  console.log(iterator.next())           // { value: undefined, done: true }



// Decorator example one
  function inject(options: { api_version: string }) {
     return (target:any) => {
       target.apiVersion = options.api_version
     }
  }

  @inject({
    api_version: '0.0.1'
  })
  class MyClass {
    static apiVersion: string
  }



// Decorator example two
  function readonly():Function {
    return function(target:any, name:string, descriptor:PropertyDescriptor) {
      descriptor.writable = false
    }
  }
  class Example {
    a = 3
    @readonly()
    b = 5
  }

  const e = new Example()
  try {
    e.a = 1
    e.b = 2
    console.log('e.a:, e.b: ', e.a, e.b)
  } catch (e) {
    console.log('Typeerror: attempted to reassign readonly')
  }

export {
  MyClass
}
