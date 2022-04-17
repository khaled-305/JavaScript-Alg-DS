// Implement a swap helper function that we will use in both BS and SS
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//bubbleSort works by having sorted data accumulate at end of array
function bubbleSort(arr) {

  // outer for-loop that runs Array Length times
  for(let i = 0; i < arr.length; i++) {

     // create a for-loop that checks if the current iterated number and the next iterated 
     // number are greater or less than each other
    for (let j = 0; j < arr.length; j++) {

      // if current number greater than next number, swap using helper function
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  // return the now sorted array
  return arr;

}

//selectionSort works by having sorted data accumulate at start of array
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[swapIdx]) {
        swapIdx = j;
      }
    }
    swap(arr, i, swapIdx);
  }

  return arr;
}

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

describe("swap()", () => {
  it("swaps values in an array when provided with 2 indexes.", () => {
    const arr = [13, 2, 4];
    swap(arr, 0, 1);
    assert.deepEqual(arr, [2, 13, 4]);
  });
});

describe.skip("Bubble Sort", () => {
  it("sorts an array", () => {
    assert.deepEqual(bubbleSort([5, 1, 3, 7, 6, 2, 4]), [1, 2, 3, 4, 5, 6, 7]);
  });
});

describe.skip("Selection Sort", () => {
  it("sorts an array", () => {
    assert.deepEqual(selectionSort([5, 1, 3, 2, 4]), [1, 2, 3, 4, 5]);
  });
});

mocha.run();
