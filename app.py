def pt(n):
    retL = []
    for x in range(1, n):
        for y in range(1, n):
            for c in range(1, n):
                if (x * x + y * y == c * c) :
                    retL.append([x, y, c])
            #hyp = sqrt( x**2 + y**2 )
            #if hyp.
    return retL

print pt(3)
print pt(4)
print pt(6)
print pt(7)


def pt2(n):
    return [ (a, b, c)
        for a in range (1, n)
        for b in range (1, n)
        for c in range (1, n)
        if a*a + b*b == c*c ]
    #squares = [x * x for x in range(1, n)]
    #return squares

print pt(3)
print pt(4)
print pt(6)
print pt(7)
