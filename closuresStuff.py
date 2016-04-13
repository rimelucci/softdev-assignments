#suppose many calls to get_name throuought code

def dble(f):
    name = f()
    return name+name

#We can do better:
#similarly to i = i +1

#get_name = dble(get_name)
#print get_name



########################
import random
def doubler(f):
    def inner():
        name = f()
        return name + name
    return inner

@doubler
def get_name():
    names = ['tom', 'sue', 'harry', 'lisa', 'sarah', 'horatio']
    return random.choice(names)

print get_name()



#Takeaway:
#You can write functions that transform functions
# a python decorator is shorthand for calling a wrapper-type function
