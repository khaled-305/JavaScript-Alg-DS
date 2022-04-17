// Implement a Binary Search Algorithm that searches a Sorted Array
// for the provided value.
// The Binary Search Algorithm will return the index of value found, or -1 if not found.

const binarySearch = (sortedArr, value) => {
  // create a left pointer index, that starts at 0
  let left = 0;
  // create a right pointer index that starts at length of array -1
  let right = sortedArr.length -1;

  // while LP is less than or equal to RP
  while (left <= right) {
     // calculate middle index (round up or down), and then middle value
    const mid = Math.floor((left + right) / 2);
    const midVal = sortedArr(mid);

    if (midVal === value) { // if middle value is equal to value, return middle index
      return mid;
    } else if (midVal < value) { // if middle value is too small, move left pointer up
      left = mid + 1;
    } else {  // if middle value is too large, move right pointer down
      right = mid - 1;
    }
  }
   
  // return -1 (since value never found in while loop)
  return -1;
};

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

const sortedNumsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("binarySearch()", () => {
  it("returns correct index on sortedArray with just one number", () => {
    assert.equal(binarySearch([5], 5), 0);
    assert.equal(binarySearch([15], 5), -1);
  });
  it("works on sorted array with 10 numbers", () => {
    assert.equal(binarySearch(sortedNumsArray, 10), 10);
    assert.equal(binarySearch(sortedNumsArray, 0), 0);
    assert.equal(binarySearch(sortedNumsArray, 5), 5);
    assert.equal(binarySearch(sortedNumsArray, 7), 7);
    assert.equal(binarySearch(sortedNumsArray, 1337), -1);
  });
});

mocha.run();
