/*
    This function should take an array of integers, and return one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise
*/

function isSortedAndHow(nums) {
    var result = ""
    var isAscending = true
    var isDescending = true
    for (let i = 0; i < nums.length - 1; i++) {
        isAscending = isAscending && (nums[i] <= nums[i + 1])
        isDescending = isDescending && (nums[i] >= nums[i + 1])
    }

    if (isAscending) {
        result = "yes, ascending"
    } else if (isDescending) {
        result = "yes, descending"
    } else {
        result = "no"
    }
    return (result);
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.isSortedAndHow = isSortedAndHow