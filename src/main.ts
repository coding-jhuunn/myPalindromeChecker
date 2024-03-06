const inputValue = document.getElementById("input") as HTMLInputElement;

const checkBtn = document.getElementById("check-btn");

const result = document.getElementById("result") as HTMLInputElement;

checkBtn?.addEventListener("click", () => {
  if (inputValue.value.length < 1) {
    result.innerHTML = "Please enter a word";
  } else {
    const input = inputValue.value.toLowerCase();

    const toCheck = input.split("").reverse().join("");
    console.log(toCheck);
    console.log(input);
    if (toCheck === input) {
      result.innerHTML = `${inputValue.value} is an example of palindrome word`;
    } else {
      result.innerHTML = `${inputValue.value} is not an example of palindrome word`;
    }

    inputValue.value = "";
  }
});
