const inputValue = document.getElementById("input") as HTMLInputElement;

const checkBtn = document.getElementById("check-btn");

const result = document.getElementById("result") as HTMLInputElement;

checkBtn?.addEventListener("click", () => {
  if (inputValue.value.length < 1) {
    result.innerHTML = "Please enter a word";
  } else {
    const input = inputValue.value;

    const toCheck = input.split("").reverse().join("");
    if (toCheck === input) {
      result.innerHTML = `${input} is an example of palindrome word`;
    } else {
      result.innerHTML = `${input} is not an example of palindrome word`;
    }
    inputValue.value = "";
  }
});
