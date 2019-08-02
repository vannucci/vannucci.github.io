let input = [-2,1,-3,4,-1,2,1,-5,4];

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //Kadane’s algorithm 
    let max_so_far = 0;
    let max_ending_here = 0;
    let start_subarray_index = 0;
    let end_subarray_index = 0;
    
    //loop over array
    for(let i = 0; i < nums.length; i++) {
        max_ending_here += nums[i];
        
        if(max_ending_here < 0) {
            start_subarray_index = i + 1;
            end_subarray_index = i + 1;
            max_ending_here = 0;
        }
        if(max_so_far < max_ending_here) {
            if(i + 1 <= nums.length) {
                end_subarray_index = i + 1;
            } else {
                end_subarray_index = nums.length;
            }
            max_so_far = max_ending_here;
        }
    }
    return nums.slice(start_subarray_index ,end_subarray_index);
};

console.log(maxSubArray(input));
//[4,-1,2,1] has the largest sum = 6.
