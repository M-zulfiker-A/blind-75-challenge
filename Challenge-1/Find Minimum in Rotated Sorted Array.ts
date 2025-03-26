function findMin(nums: number[]): number {
    let l,r,m
    l= 0;
    r = nums.length -1
    let res = nums[0]
    do {
        m = Math.floor((l + r) / 2)
        let left = nums[l]
        let right = nums[r]
        let curr = nums[m]
        //check for sorted array
        if(left < right) {
            return Math.min(res, left)
        }
        res = Math.min(curr, res)
        if(left <= curr) {
            l = m + 1
        } else if(right >= curr) {
            r = m - 1
        }

    }while(l<=r);
    return res
};
