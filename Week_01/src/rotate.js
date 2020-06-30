var totate = function(nums , k) {
myReverse (0,k);
myReverse (k+1,nums.length-1);
myReverse (0,nums.length-1);
function myReverse (start,end) {
    while (start<end) {
        var tmp = nums[start];
        nums[end] = nums[start];
        nums[start] = tmp;
    }
}

}
