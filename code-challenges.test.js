// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("sentenceWithNameCapitalized", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" },
    ];
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(sentenceWithNameCapitalized(people)).toEqual([
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee.",
    ]);
  });
});

// b) Create the function that makes the test pass.

// map through array and use name and occupation keys to get their respective value ✅
// split the string of the name up by space ✅
// to capitalize each word ✅
// join the split string back together as the new value ✅
// use string literal to create the sentence by adding 'is' in believe the two values ✅
// return the array of strings ✅

const sentenceWithNameCapitalized = (array) => {
  return array.map(
    (obj) =>
      `${obj.name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")} is ${obj.occupation}.`
  );
};

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// Expected output: [ 2, 1, -1 ]

describe("onlyNumsRemaindersDividedByThree", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
    expect(onlyNumsRemaindersDividedByThree(hodgepodge1)).toEqual([
      2, 0, -1, 0,
    ]);
    expect(onlyNumsRemaindersDividedByThree(hodgepodge2)).toEqual([2, 1, -1]);
  });
});

// b) Create the function that makes the test pass.

// filter out non numbers ✅
// map through array with % 3 ✅
// return remainder in an array ✅

const onlyNumsRemaindersDividedByThree = (array) => {
  return array
    .filter((value) => typeof value === "number")
    .map((num) => num % 3);
};

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumOfAllNumsCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4];
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10];
    // Expected output: 1125
    expect(sumOfAllNumsCubed(cubeAndSum1)).toEqual(99);
    expect(sumOfAllNumsCubed(cubeAndSum2)).toEqual(1125);
  });
});

// b) Create the function that makes the test pass.

// map through array and **3 each value ✅
// reduce array and return the sum ✅

const sumOfAllNumsCubed = (array) => {
  return array.map((num) => num ** 3).reduce((a, b) => a + b);
};
