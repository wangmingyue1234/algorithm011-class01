var removeDeplicates = function(nums) {
    var j=0;
    for (var j=1;i<nums.length;i++) {
        if (nums[i] !== nums[i-1]) {
            j++;
            nums[j] = nums[i];
        }
        return j+1;
    }
}
