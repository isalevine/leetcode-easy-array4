// source: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/



// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true



var containsDuplicate = function(nums) {
    for (i1 = 0; i1 < nums.length; i1++) {
        let currentNum = nums[i1];
        
        for (i2 = i1 + 1; i2 < nums.length; i2++) {
            if (currentNum == nums[i2]) {
                return true
            };
        };
    };
    
    return false
};