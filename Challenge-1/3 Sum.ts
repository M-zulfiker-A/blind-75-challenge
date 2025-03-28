function threeSum(nums: number[]): number[][] {
  const sortedNums = nums.toSorted((a,b) => a - b)
  let prevFirst = null
  let result = []
  for(let i=0; i< nums.length ; i++) {
    let first = sortedNums[i]
    if(prevFirst === first){
        continue
    }
    let j,k
    j = i + 1
    k = nums.length - 1
    while(j<k){
        let threeSum = first + sortedNums[j] + sortedNums[k]
        if(threeSum === 0){
            result.push([sortedNums[i], sortedNums[j], sortedNums[k]])
            j++
            while((sortedNums[j] === sortedNums[j-1]) && (j < k)) {
                j++
            }
        } else if (threeSum < 0) {
            j++
        } else {
            k--
        }
    }
    prevFirst = first
  }
  return result
};
