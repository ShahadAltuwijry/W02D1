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
  //couldn't figure it out yet
};
onlyString(["one", 12, "hi", true, 88, "12"]); // => ["one","hi","12"]
onlyString([10, 20, 30, 40, 50, 60, false]); // => []

// 5. login function

const users = [
  ["Jane", "123456"],
  ["admin", "abc123"],
];

const login = function (username, password) {
  if (
    (username === "Jane" && password === "123456") ||
    (username === "admin" && password === "abc123")
  ) {
    console.log("Login Successful");
  } else {
    console.log("Login Failed");
  }
};

login("Jane", "123456"); // => "Login Successful"
login("Jane", "5321"); // => "Login Failed"
login("Mark", "123456"); // => "Login Failed"
login("admin", "abc123"); // => "Login Successful"
login("admin", "aaabc123"); // => "Login Failed"

// 6. maximum number of an array

const maximumNumber = function (numbers) {
  maxnum = Math.max(...numbers); //this is called spread syntax (...)
  console.log(maxnum);
};

maximumNumber([0, 5, 2, 10, 8, 6]); // => 10
maximumNumber([0, 5, 6]); // => 6
maximumNumber([0, 5, 6, 12, 1]); // => 12

// 7. reversed string

const reversString = function (string) {
  revStr = [...string].reverse().join(""); //spread syntax
  console.log(revStr);
};

reversString("Hello"); // => "olleH"
reversString("John"); // => "nhoJ"
reversString("shahad"); // => "dahahs"
