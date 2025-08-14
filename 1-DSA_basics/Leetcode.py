class Solution(object):
    def twoSum(self, nums, target):
        for i in range(len(nums)):
            for j in range(i+1,len(nums)):
                if nums[i] + nums[j] == target:
                    return [i,j]   
        return[]            
#print(solution.twoSum([2,7,11,15],9))
    def isPalindrome(self, x):
        if x < 0:
            return False
        ReveN = 0
        Num = x
        while(x>0):
            lastN = x % 10
            ReveN = (ReveN*10) + lastN
            x = x // 10
        return ReveN == Num 
#print(solution.isPalindrome(121))

    def romanToInt(self, s: str) -> int:
        # Dictionary to store Roman numeral values
        values = {
            "I": 1, "V": 5, "X": 10, "L": 50,
            "C": 100, "D": 500, "M": 1000
        }

        total = 0  # To store the final result
        prev_value = 0  # To track the previous numeral's value

        # Iterate through the string from right to left
        for i in reversed(s):  
            current_value = values[i]  # Get integer value of current numeral

            # If the current value is smaller than the previous value, subtract it
            if current_value < prev_value:
                total -= current_value
            else:
                total += current_value  # Otherwise, add it to the total
            
            prev_value = current_value  # Update previous value for next iteration
        
        return total

solution = Solution()
print(solution.romanToInt("L"))
        
