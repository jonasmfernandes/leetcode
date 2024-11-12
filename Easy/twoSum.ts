function twoSum(nums: number[], target: number): number[] {
    const numMap: Map<number, number> = new Map()

    for(let i = 0; i < nums.length; i++){
      const diff = target - nums[i]

      if(numMap.has(diff)){
        return [numMap.get(diff)!, i] 
      }
      
      numMap.set(nums[i], i)
    }
};