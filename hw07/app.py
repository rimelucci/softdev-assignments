def hello(x):
    return x + 1

f = hello

print f(20)

def h( x ):
    return lambda y : x + y


print h(1)
print h(2)
print h(1)(3)
print h(2)(5)

b = h(1)
d = h(1)(5)

print b
print d

def f(x):
    def  g(y):
        return x + y
    return g

print "-----------------------------"

print f(1)(3)



#=======================================================
#TASK:
#Write a closure with outer function named 'repeat'
# such that the function calls shown below will yield the outputs shown.

#print r1(2) -> hellohello
#print r2(2) -> goodbyegoodbye
#print repeat('cool')(3) -> coolcoolcool
#=======================================================

def repeat(word):
    def times(x):
        return word * x
    return times

r1 = repeat("hello")
r2 = repeat("goodbye")
print r1
print r2
print repeat("hello")(4)
