function drawDesign1(numInput) {
  for (i = 0; i < 3; i++) {
    console.log("*".repeat(numInput));
  }
}

function drawDesign2(numInput) {
  for (i = 1; i <= numInput; i++) {
    console.log("*".repeat(i));
  }
}

function drawDesign3(numInput) {
  for (i = 1; i <= numInput; i++) {
    console.log("*".repeat(i));
  }
  console.log("*".repeat(numInput + 1));
  for (i = numInput; i > 0; i--) {
    console.log("*".repeat(i));
  }
}

const input = prompt("Enter Number: ");
numInput = parseInt(input, 10);
//drawDesign1(numInput);
//drawDesign2(numInput);
drawDesign3(numInput);
