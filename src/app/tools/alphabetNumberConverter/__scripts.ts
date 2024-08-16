function convertAlphabet() {
  const alphabetInput = document.getElementById(
    "alphabetInput"
  ) as HTMLInputElement;
  const alphabetOutput = document.getElementById(
    "alphabetOutput"
  ) as HTMLParagraphElement;
  const alphabet = alphabetInput.value.split(",");
  const numbers = alphabet.map((a) => a.charCodeAt(0) - 64);
  alphabetOutput.innerText = numbers.join(",");
}
function convertNumber() {
  const numberInput = document.getElementById(
    "numberInput"
  ) as HTMLInputElement;
  const numberOutput = document.getElementById(
    "numberOutput"
  ) as HTMLParagraphElement;
  const numbers = numberInput.value.split(",").map((n) => parseInt(n));
  const alphabet = numbers.map((n) => String.fromCharCode(n + 64));
  numberOutput.innerText = alphabet.join(",");
}

export { convertAlphabet, convertNumber };
