def printNos(count=0):
    if count == 3:  # Base condition to stop recursion
        print(count)
        return
    print(count)
    printNos(count + 1)  # Recursive call with incremented value
#printNos()  # Calling the function

def printName(n,count = 1):
    if count == 3:  # Base condition to stop recursion
        return
    print(n)
    printName(n,count+1)
#print(printName('ahmed'))

def printNUM(count=1):
    if count == 3:  # Base condition to stop recursion
        print(count)
        return
    print(count)
    printNUM(count + 1)  # Recursive call with incremented value
#printNUM() 

def nto0(n=4):
    if n == 0:
        print(n)
        return
    print(n)
    nto0(n-1)
nto0()



