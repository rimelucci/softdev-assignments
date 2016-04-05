#nums = [ x for x in range(8)]
#print nums

#nums = [ x*x for x in range(8)]
#print nums

#nums = [(x, x*x, x*x*x) for x in range(8)]
#print nums

p = "BurgersAndTangs1234"
f = "thispasswordsucks"
d = "ShOrT"
UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS = "abcdefghijklmnopqrstuvwxyz"
numbers = "1234567890"
symbols = ".?!&#,;:-_*"

#YOUR TASK The First:
#Write a function that uses list comprehension to return whether a password meets a minimum threshold: it contains a mixture of upper- and lowercase letters, and at least one number.
def passwordChecker( string ):
    upperCase =  [ 1 if x in UC_LETTERS else 0 for x in string]
    lowerCase = [ 1 if x in LC_LETTERS else 0 for x in string]
    numbersCheck = [1 if x in numbers else 0 for x in string]
    #print upperCase
    #print lowerCase
    #print numbersCheck
    if (sum(upperCase) > 0 and sum (lowerCase) > 0 and sum(numbersCheck) > 0):
        return True

    return False

print passwordChecker(p)
print passwordChecker(f)

#YOUR TASK The Second:
#Write a function that uses list comprehension to return a password's strength rating. This function should return a low integer for a weak password and a higher integer for a stronger password. (Suggested scale: 1-10)
#Consider these criteria:
#* mixture of upper- and lower-case
#* inclusion of numerals
#* inclusion of these non-alphanumeric chars: . ? ! & # , ; : - _ *

def brolicPasswordirizer( string ):
    #upperCase =  [ 1 if x in UC_LETTERS else 0 for x in string]
    #lowerCase = [ 1 if x in LC_LETTERS else 0 for x in string]
    #numbersCheck = [1 if x in numbers else 0 for x in string]
    #symbolsCheck = [1 if x in symbols else 0 for x in string]

    #totalCount = upperCase.count(1) * 2 + lowerCase.count(1) + numbersCheck.count(1) * 2 + symbolsCheck.count(1) * 4

    l = [1 if in UC_LETTERS else
            2 if in LC_LETTERS else
                3 if x in numbers else
                    0 for x in p]

        return 1 in l and 2 in l and 3 in l

brolicPasswordirizer( p )
brolicPasswordirizer( f )
brolicPasswordirizer( d )
