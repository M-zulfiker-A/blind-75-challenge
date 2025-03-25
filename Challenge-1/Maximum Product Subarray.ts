function maxProduct(nums: number[]): number {
    let currMin = nums[0]
    let currMax = nums[0]
    let maxProd = nums[0]

    for(let i = 1; i< nums.length; i++){
       let temp = currMax * nums[i]
       currMax = Math.max(nums[i],temp, currMin * nums[i])
       currMin = Math.min(nums[i],temp, currMin * nums[i])
       maxProd = Math.max(currMax, maxProd)
    }

    return maxProd
};
