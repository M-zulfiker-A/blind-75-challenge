function productExceptSelf(nums: number[]): number[] {
    let output = []
    for(let i = 0; i < nums.length ; i++){
        let previous = i === 0 ? 1 : output[i -1]
        //prefix
        if(i === 0 ){
            output.push(previous)
            continue
        }
        output.push(previous * nums[i-1])
    }

    let postFix = nums.at(-1)
    for(let i = nums.length - 2; i > -1 ; i--){
        output[i] = postFix * output[i] 
        postFix *= nums[i]
    }
    return output
};
