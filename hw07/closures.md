Closures
- A function is declared inside another function
- Inner function accesses a variable from the outer function (outside of the local scope of the inner function)


r1 = repeat("hello")

This creates a closure because repeat runs, binds s to "hello", then exits, returning a function (times) with bound to "hello"
