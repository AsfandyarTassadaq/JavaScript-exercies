/*
    Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.

    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/

function sumTwoSmallestNumbers(nums) {

    // console.log(nums)
    res = nums.sort((a,b) => a - b)

    // console.log(res)
    return res[0]+res[1]
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.sumTwoSmallestNumbers = sumTwoSmallestNumbers