'use strict';

import { quickSort } from './quicksort';
import { Utils } from './utils';

describe('quickSort', () => {
    it ('sorts 2 numbers', () => {
        const unsortedArray = [5, 3];
        const sortedArray = quickSort().sort(unsortedArray);
        expect(Utils.isArraySortedAscending(sortedArray).result).toEqual(true);
    });
    it ('sorts 10 numbers', () => {
        const unsortedArray = [3, 16, 69, 33, 27, 12, 93, 40, 82, 24];
        const sortedArray = quickSort().sort(unsortedArray);
        expect(Utils.isArraySortedAscending(sortedArray).result).toEqual(true);
    });
    it ('sorts 100 numbers', () => {
        const unsortedArray = [
            236, 156, 196, 25, 357, 198, 420, 418, 75, 399, 416, 136, 396, 1, 296, 174, 36, 83,
            128, 97, 491, 259, 411, 340, 62, 373, 57, 497, 440, 168, 492, 22, 153, 44, 225, 258,
            422, 147, 419, 280, 5, 482, 211, 246, 477, 283, 244, 145, 473, 446, 222, 108, 133,
            315, 436, 36, 396, 18, 99, 271, 80, 425, 308, 264, 412, 420, 147, 171, 320, 215, 25,
            143, 90, 134, 337, 278, 76, 463, 88, 450, 178, 459, 255, 393, 398, 237, 336, 321,
            493, 150, 203, 149, 398, 201, 174, 236, 373, 219, 381, 53
        ];
        const sortedArray = quickSort().sort(unsortedArray);
        expect(Utils.isArraySortedAscending(sortedArray).result).toEqual(true);
    });
    it ('sorts an empty array', () => {
        const unsortedArray = [];
        const sortedArray = quickSort().sort(unsortedArray);
        expect(sortedArray).toEqual([]);
        expect(Utils.isArraySortedAscending(sortedArray).result).toEqual(true);
    });
    it ('doesn\'t sort a null value', () => {
        const unsortedArray = null;
        const sortedArray = quickSort().sort(unsortedArray);
        expect(sortedArray).toEqual(null);
    });
});
