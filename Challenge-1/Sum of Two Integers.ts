function getSum(a: number, b: number): number {
    if(b === 0) {
        return a
    }
    const carry = (a & b) << 1
    return getSum((a ^ b), carry)
};
