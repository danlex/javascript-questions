
"use strict";

// Problem: Find the most frequent integer in an array
class Finder {
    constructor(array) {
        this.array = array;
    }
    
    find() {
        const counterBucket = {};
        this.array.forEach(item => {
            if (counterBucket.hasOwnProperty(item)) {
                counterBucket[item] ++;
            } else {
                counterBucket[item] = 1;    
            }
        });
        let maxIndex;
        for (var index in counterBucket) {
            if (counterBucket.hasOwnProperty(index)) {
               if(maxIndex === undefined || counterBucket[maxIndex] < counterBucket[index]) {
                    maxIndex = index;
                }
            }
        }
        return maxIndex;
    }
}

let finder = new Finder([5, 2, 3, 1, 2]);
console.log(finder.find());