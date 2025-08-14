n = 4 #int(input("Enter a number :")) 
def pattern1():
    for i in range(n):
        for j in range(n):
            print('*',end='')
        print()
#pattern1()
def pattern2():
    for i in range(n):
        for j in range(i):
            print('*',end='')
        print('')
#pattern2()
def pattern3():
    for i in range(n):
        for j in range(i):
            print(j,end='')
        print('')
#pattern3()
def pattern4():
    for i in range(n):
        for j in range(i):
            print(i,end='')
        print('')
#pattern4()
def pattern5():
    for i in range(n):
        for j in range(i):
            print(n-j+1,end='')
        print('')
#pattern5()

def pattern6():
    for i in range(n):
        for j in range(n-i+1):
            print(j,end='')
        print('')
#pattern6()

def pattern7():
    for i in range(n):
        for j in range(n-i,-1,-1):
            print(j,end='')
        print('')
#pattern7()

def pattern8():
    for i in range(n):
        for j in range(n-i-1):
            print(" ",end="")
        for k in range(2*i+1):
            print("*",end="")
        print('')
#pattern8()

def pattern9():
    for i in range(n):
        for j in range(i):
            print(" ",end='')
        for k in range(2*(n-i)-1):
            print("*",end='')
        print('')
#pattern9()

def pattern10():
    for i in range(n):
        for j in range(n-i-1):
            print(" ",end='')
        for k in range(2*i+1):
            print("*",end='')
        print('')
    for i in range(n - 1):  
        for j in range(i + 1):  # Spaces before stars
            print(" ", end="")
        for k in range(2 * (n - i - 1) - 1):  # Stars
            print("*", end="")
        print() 
#pattern10()

def pattern11():
    for i in range(n):
        for j in range(i):
            print("*",end='')
        print('')
    for i in range(n - 1, 0, -1):  # Runs from n-1 down to 1
        for j in range(i):  # Prints i stars
            print("*", end="")
        print('') 
#pattern11()
def pattern12():
    for i in range(n):
        for j in range(i):
            if j == 1:
                print(0,end='')
            else:
                print(1,end='')     
        print('')
#pattern12()

nm = 10
def pattern13():
    for i in range(n):
        for j in range(i):
            print(j,end='')
        for k in range(n-i-1):
            print(" ",end='')
        for j in range(i):
            print(j,end='')
        print()           
#pattern13() 

def pattern14(n):
    num = 1  # Start number
    for i in range(1, n + 1):  # Loop for rows
        for j in range(i):  # Loop for numbers in a row
            print(num, end=" ")  # Print number with space
            num += 1  # Increment number
        print()  # Newline after each row

# Example usage
n = 5
pattern14(n)
