function search(nums: number[], target: number): number {
    let l,r,m
    l= 0;
    r = nums.length -1

    while(l<=r){
        m = Math.floor((l + r) / 2)
        if(nums[m] === target) {
            return m
        }
        if(nums[l] <= nums[m]){
            if(target <= nums[m] && target >= nums[l]){
                r = m - 1
            } else {
                l = m + 1
            }

        } else {
            if(target >= nums[m] && target <= nums[r]){
                l = m + 1
            } else {
                r = m - 1
            }
        }
    }
    return -1
};
