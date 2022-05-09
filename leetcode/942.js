var diStringMatch = function(s) {
    let n = s.length, lo = 0, hi = n;
    const perm = new Array(n + 1).fill(0);
    for (let i = 0; i < n; ++i) {
        perm[i] = s[i] === 'I' ? lo++ : hi--;
    }
    perm[n] = lo; // 最后剩下一个数，此时 lo == hi
    return perm;
};
