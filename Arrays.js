// 1. adding at the end

const addToArray = function (array, string) {
  console.log(array.push(string));
  console.log(array);
};

addToArray(["Hello", "i", "am"], "John"); // => ["Hello", "i", "am", "John"]

// 2. converting to string

const convertToString = function (array, char) {
  console.log(array.join(" "));
};

convertToString(["Hello", "i", "am", "John"]); // => "Hello i am John"

// 3. updating an array

// the array values are unique, no duplicate values in the array
const updateValue = function (array1, index, value) {
  if (index < array1.length) {
    array1.splice(index, 1, value);
    console.log(array1);
  } else {
    console.log("there is no element to updated in this index");
  }
};

updateValue([10, 20, 30], 3, 50); // => "there is no element to updated in this index"
updateValue([1, 2, 3], 0, 10); // => [10, 2, 3]
updateValue([1, 2, 3], 1, 10); // => [1, 10, 3]

// 4. a new array that returns the strings in the old array

const onlyString = function (array2) {
  for (let s = 0; s < array2.length; s++) {
    if (array2[s] === String) {
      let m = s - 1;
      array2.slice(m, s);
      console.log(array2);
    }
  }
};
onlyString(["one", 12, "hi", true, 88, "12"]); // => ["one","hi","12"]
onlyString([10, 20, 30, 40, 50, 60, false]); // => []
