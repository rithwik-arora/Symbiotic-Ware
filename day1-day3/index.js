function bubbleSort(list = [], isAsc) {
  if (isAsc) {
    for (var i = 0; i < list.length; i++) {
      for (var j = 0; j < list.length; j++) {
        if (list[j] < list[j - 1]) {
          var temp = list[j - 1];
          list[j - 1] = list[j];
          list[j] = temp;
        }
      }
    }
  } else {
    for (var i = list.length - 1; i > 0; i--) {
      for (var j = list.length - 1; j > 0; j--) {
        if (list[j] > list[j - 1]) {
          var temp = list[j - 1];
          list[j - 1] = list[j];
          list[j] = temp;
        }
      }
    }
  }

  return list;
}

function countSort(list = []) {
  var maxNum = Math.max(...list);
  const N = list.length;
  const countArray = new Array(maxNum + 1).fill(0);

  for (let i = 0; i < N; i++) {
    countArray[list[i]]++;
  }

  for (let i = 1; i <= maxNum; i++) {
    countArray[i] += countArray[i - 1];
  }
  const outputArray = new Array(N);
  if (isAsc) {
    for (let i = N - 1; i >= 0; i--) {
      outputArray[countArray[list[i]] - 1] = list[i];
      countArray[list[i]]--;
    }
  } else {
    for (let i = N - 1; i >= 0; i--) {
      let x = list[i];
      outputArray[N - countArray[x]] = list[i];
      countArray[list[i]]--;
    }
  }
  return outputArray;
}

function selectionSort(list = [], isAsc) {
  var min_idx;
  let N = list.length;

  if (!isAsc) {
    for (let i = N - 1; i > 0; i--) {
      min_idx = i;
      for (let j = i - 1; j >= 0; j--)
        if (list[min_idx] > list[j]) {
          min_idx = j;
        }
      var temp = list[i];
      list[i] = list[min_idx];
      list[min_idx] = temp;
    }
  } else {
    for (let i = 0; i < N - 1; i++) {
      min_idx = i;
      for (let j = i + 1; j < N; j++)
        if (list[min_idx] > list[j]) {
          min_idx = j;
        }
      var temp = list[i];
      list[i] = list[min_idx];
      list[min_idx] = temp;
    }
  }

  return list;
}

const list = [3, 1222, 90, 12, 23, -1, 10, 2];
var isAsc = null;
console.log("Array:", list);

// "asc" / "descß"
// true / false

//const UserInput = prompt(
("Enter a/asc for ascending order or d/desc for desceding order");
//).toLowerCase();
//console.log(UserInput);

//if (UserInput == "a" || UserInput == "asc") {
//  isAsc = true;
//} else if (UserInput == "d" || UserInput == "desc") {
isAsc = false;
//} else {
console.log("Wrong input.");
//}

if (isAsc != null) {
  console.log("Count Sort:");
  console.log(countSort(list, isAsc));

  console.log("Bubble Sort:");
  console.log(bubbleSort(list, isAsc));

  console.log("Select Sort:");
  console.log(selectionSort(list, isAsc));
}

// document
// document.getElementById
// document.querySelector
// addEventListener

const sortingBtn = document.getElementById("sortBtn");
const text = document.getElementById("numInp");

function Sort(event) {
  event.preventDefault();
  var nums = text.value;
  let check = document.getElementById("toggleSwitch");
  var bool = !check.checked;
  console.log(bool);

  nums = nums.replace(/ /g, "");
  let result = nums.toString().split(",").map(Number);
  document.getElementById("ans").textContent =
    "Sorted List : " + selectionSort(result, bool);
}

sortingBtn.addEventListener("click", Sort);
console.log(sortingBtn);
