document.addEventListener('click', function (e) {
  if (e.target.classList.contains('edit-me')) {
    let userInput = prompt('Enter your desire new text', e.target.parentElement.parentElement.querySelector('.item-text').innerHTML)
    if (userInput) {
      axios.post('/update-item', { text: userInput, id: e.target.getAttribute('data-id') }).then(() => {
        e.target.parentElement.parentElement.querySelector('.item-text').innerHTML = userInput
      }).catch(() => {
        console.log('Please try again later')
      })
    }
  }
})