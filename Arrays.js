// 1. adding at the end

const addToArray = function (array1, string) {
  console.log(array1.push(string));
  console.log(array1);
};

addToArray(["Hello", "i", "am"], "John"); // => ["Hello", "i", "am", "John"]

// 2. converting to string

const convertToString = function (array1, char) {
  console.log(array1.join(" "));
};

convertToString(["Hello", "i", "am", "John"]); // => "Hello i am John"

// 3. updating an array

// the array values are unique, no duplicate values in the array
const updateValue = function (array2, index, value) {
  if (index < array2.length) {
    array2.splice(index, 1, value);
    console.log(array2);
  } else {
    console.log("there is no element to updated in this index");
  }
};

updateValue([10, 20, 30], 3, 50); // => "there is no element to updated in this index"
updateValue([1, 2, 3], 0, 10); // => [10, 2, 3]
updateValue([1, 2, 3], 1, 10); // => [1, 10, 3]

// 4. a new array that returns the strings in the old array

const onlyString = function (array) {
  const newArray = [];
  for (let s = 0; s < array.length; s++) {
    if (typeof array[s] == "string") {
      newArray.push(array[s]);
    }
  }
  console.log(newArray);
};

onlyString(["one", 12, "hi", true, 88, "12"]); // => ["one","hi","12"]
//onlyString([10, 20, 30, 40, 50, 60, false]); // => []

// 5. login function

const users = [
  ["Jane", "123456"],
  ["admin", "abc123"],
];

const login = function (username, password) {
  for (let u = 0; u < users.length; u++) {
    if (username === users[u][0] && password === users[u][1]) {
      return "Loging successful";
    }
  }

  return "Loging failed";
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
  revStr = [...string].reverse().join(""); //spread syntax (...)
  console.log(revStr);
};

reversString("Hello"); // => "olleH"
reversString("John"); // => "nhoJ"
reversString("shahad"); // => "dahahs"
