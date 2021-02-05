function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

window.addEventListener('DOMContentLoaded', function () {

  // 1. use getRandomInt(6) to randomize dice values
  // 2. find the dice element
  // 3. replace the element's inner html with new html using the dice values above

  // ⬇️ ⬇️ ⬇️ YOUR CODE GOES HERE ⬇️ ⬇️ ⬇️
let dice1
let dice2

dice1 = getRandomInt(6)
dice2 = getRandomInt(6)

console.log(dice1)
console.log(dice2)

let dice = document.querySelector('.dice')
// console.log(dice)

dice.innerHTML = `
        <img src="../images/dice/${dice1}.png" class="die w-1/2 md:w-1/6">
        <img src="../images/dice/${dice2}.png" class="die w-1/2 md:w-1/6">

`


  // ⬆️ ⬆️ ⬆️ YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE ⬆️ ⬆️ ⬆️
})
