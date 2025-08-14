#Count Number of digits
def count(n):
    count = 0
    while n>0:
        count += 1
        n = n//10         #/-floating divison,//-Int division to remove last num
    return count
#print(count(12))

#Reverse a number
def reverse(n):
    revN = 0
    while n > 0:
        lastN = n % 10  # Extract the last digit
        revN = (revN * 10) + lastN  # Append digit to reversed number
        n = n // 10  # Remove last digit from n
    return revN
#print(reverse(123))  # Output: 321

#Check Palindrome
num = 122
def PalindromeN(n):
    revN = 0
    while n > 0:
        lastN = n % 10
        revN = (revN*10) + lastN
        n = n // 10    
    if revN == num:
        print("p")
    else:
        print("no")
    return revN 
#print(PalindromeN(121))

def arstrongNum(n):
    sum = 0
    while(n>0): # Loop runs until n becomes 0
        LastNum = n % 10  #To extract the lastnum
        sum = sum + (LastNum**3)
        n = n // 10 #To remove the last num
    return sum
#print(arstrongNum(153))
def divide(n):
   for i in range(1,n+1):
        if n % i == 0:
            print(i,end=" ")
#print(divide(36))
     
def prime(n):
   for i in range(1,n+1):
        if n % i == 0:
            print(i,end=" ")
print(prime(17))