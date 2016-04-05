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
#######################
###############################
########################################
#Notes

def inc(x):
    return x + 1

def dec(x):
    return x - 1

f = inc

print f(5)
flist = [inc, dec]
print flist


#a simple closure in python
def makeAdder(n):
    def inner(x):
        return x + n;
    return inner

add3 = makeAdder(3)
add5 = makeAdder(5)

add3(10) # -->
add5(10) # -->


# A clunky approach to class type abstraction:
# TASK: Simulate a class definition using inner functions

def make_counter():
    count = o
    def inc():
        count[0] = count[0] + 1

    def inc():
        count[0] = count[0] - 1

    def reset():
        count[0] = 0

    def get():
        return count[0]


#instantiate counters

c1 = make_counter()
c2 = make_counter()

#must use clunky list notation:

c1['inc']()
c1['inc']()
c1['inc']()
print c1['get']()

c2['inc']()
print c2['get']()

c1['reset']()
print c1['get']()
