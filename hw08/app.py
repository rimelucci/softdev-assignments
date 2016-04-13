def union(a, b):
    refL = [ x for x in b if x not in a ]
    return a + refL

print union([1, 2, 3], [4, 5, 6])
print union([1, 2, 3], [2, 3, 4])

print "#######################"

def intersection(a, b):
    refL = [ x for x in b if x in a ]
    return refL

print intersection([1, 2, 3], [2, 3, 4])

def difference(a, b):
    refL = [x for x in a if x not in b]
    return refL

print "########################"
print difference([1, 2, 3], [2, 3, 4])
print difference([2, 3, 4], [1, 2, 3])


def symDiff(a, b):
    refL = difference(a, b) + difference(b, a)
    return refL
    
print "##########################"
print symDiff([2, 3, 4], [1, 2, 3])

def carProduct(a, b):
    refL = [(x,y)
                for x in a
                for y in b]
    return refL

print "##########################"
print carProduct([1, 2, 3], ["cardinal", "bulldogs", "tigers"])
