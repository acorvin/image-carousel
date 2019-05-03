// IIFE: Immediately Invoked Function Expression
;(function() {
  // Array of images for carousel
  const pictures = ['smile-0', 'smile-1', 'smile-2', 'smile-3', 'smile-4']
  // Set the counter
  let counter = 0
  // Select the buttons
  const btn = document.querySelectorAll('.btn')

  btn.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
      // Get event target
      let value = event.target

      // Navigation Button left
      if (value.classList.contains('btn-left')) {
        counter--
        if (counter < 0) {
          counter = pictures.length - 1
        }
        // Cycle through images
        document.querySelector(
          '.img-container'
        ).style.backgroundImage = `url('img/${pictures[counter]}.jpg')`
      }
      // Navigation Button right
      if (value.classList.contains('btn-right')) {
        counter++
        if (counter > pictures.length - 1) {
          counter = 0
        }
        // Cycle through images
        document.querySelector(
          '.img-container'
        ).style.backgroundImage = `url('img/${pictures[counter]}.jpg')`
      }
    })
  })
  // Automatic slideshow
  function slideshow() {
    setTimeout(function() {
      counter++
      if (counter > pictures.length - 1) {
        counter = 0
      }
      document.querySelector(
        '.img-container'
      ).style.backgroundImage = `url('img/${pictures[counter]}.jpg')`
    }, 2000)
  }
  // Begin automatic slideshow on window load after set seconds
  window.onload = setInterval(function() {
    slideshow()
  }, 8000)
})()
