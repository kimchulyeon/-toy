let word;
let newWord;

const howMany = parseInt(prompt('몇 명이 참가하나요?'))

if (howMany) {
  const btnEl = document.querySelector('.btn')
  const inputEl = document.querySelector('.blank')

  const wordEl = document.querySelector('.word')
  const orderEl = document.querySelector('.order')

  const onInput = function (event) {
    newWord = event.target.value
  }


  const onClick = function () {
    if (!word || (newWord.length === 3 && word[word.length - 1] === newWord[0])) {
      word = newWord
      wordEl.textContent = word
      inputEl.value = ""
      inputEl.focus()
      const order = parseInt(orderEl.textContent)
      if (howMany === order) {
        orderEl.textContent = 1
      } else {
        orderEl.textContent = order + 1
      }
    } else {
      alert('틀렸습니다')
    }
  }
  btnEl.addEventListener('click', onClick)
  inputEl.addEventListener('input', onInput)

} else {
  alert('게임을 안하겠다는건가?')
}