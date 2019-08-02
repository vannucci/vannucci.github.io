/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let store = {};
    return stairsRecur(n,store);
}

var stairsRecur = function(n, rec) {
    if(n === 0 || n === 1) {
        //in the case of one or no steps, there's only one way to climb it
        return 1;
    }
    if(n === 2) {
        //in the case of two steps, there are two ways to climb it
        return 2;
    }

    if(n > 2) {
        if(rec[n]) { 
            return rec[n] ;
        }
        rec[n] = stairsRecur(n - 2,rec) + stairsRecur(n - 1,rec);
        return rec[n];
    } else if(n > 1) {
        if(rec[n]) { 
            return rec[n] ;
        }
        rec[n] = stairsRecur(n - 1,rec);
        return rec[n];

    }

}

console.log(climbStairs(100));