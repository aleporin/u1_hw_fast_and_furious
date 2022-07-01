let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
]

window.onload = function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`
  }
  randomQuote()

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  document.querySelector('h1').innerText = "Welcome to Dom Toretto's homepage"
  // Part 2
  document.body.style.backgroundColor = 'purple'
  // Part 3
  document.querySelectorAll('li')[5].remove()
  // Part 4
  let specialTitle = document.querySelectorAll('.special-title')
  for (let i = 0; i < specialTitle.length; i++) {
    specialTitle[i].style.fontSize = '2rem'
  }

  // Part 5
  let partFive = document.querySelector('#past-races')
  partFive.children[3].remove()
  // Part 6
  let appendNY = document.createElement('li')
  appendNY.innerHTML = 'New York'
  partFive.appendChild(appendNY)

  // Part 7
  let blogPost = document.createElement('div')
  let newContainer = document.querySelector('.main')
  newContainer.appendChild(blogPost)
  blogPost.classList.add('blogPost')
  let blogTitle = document.createElement('h1')
  blogTitle.innerText = 'New York'
  let newParagraph = document.createElement('p')
  newParagraph.innerText = `I'm the fastest driver ever`
  blogPost.appendChild(blogTitle)
  blogPost.appendChild(newParagraph)
}
