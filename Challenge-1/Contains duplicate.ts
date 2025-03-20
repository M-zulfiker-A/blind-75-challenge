function containsDuplicate(nums: number[]): boolean {
   const freqCounter = new Map()
   for(let i = 0; i< nums.length; i++){
    if(freqCounter.get(nums[i])){
        return true
    }
    freqCounter.set(nums[i], 1)
   }
   return false
};
