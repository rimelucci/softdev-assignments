#a simple example of applying multiple decorators
#def make_bold(fn):
#    return lambda : "<b>" + fn() + "</b>"

#def make_italic(fn):
#    return lambda : "<i>" + fn() + "</i>"

#@make_bold
#@make_italic
#def hello():
#    return "hello world"

#helloHTML = hello()

#print helloHTML

import time

def funcInfo(fn):
    def args(*arg):
        arguments = ""
        arguments = ''.join(str(e) + ', ' for e in arg)
        print fn.func_name + "(" + arguments + ")"
    return args


def checkTime(fn):
    timeA = time.time()
    def runFunc(*arg):
        return fn(*arg)
    print "took just " + str(time.time() - timeA) + " seconds"
    return runFunc


@funcInfo
@checkTime
def hello(a, b, c):
    refL = (a + b + c + 1000) / 12
    return refL
