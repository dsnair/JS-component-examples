// 0. prevent default nav behavior
document
  .querySelectorAll('.nav-link')
  .forEach(item => item.addEventListener('click', e => e.preventDefault()))

// 1. click (change background color on button click)
const button = document.querySelectorAll('.btn')

button[0].addEventListener(
  'click',
  () =>
    (document.querySelector('.main-navigation').style.backgroundColor = 'pink')
)

button[1].addEventListener(
  'click',
  () => (document.querySelector('.home').style.backgroundColor = 'silver')
)

button[2].addEventListener(
  'click',
  () => (document.querySelector('.footer').style.backgroundColor = 'thistle')
)

// 2. scroll (change header color on page scroll)
const header = document.querySelectorAll('h2, h4')
window.addEventListener('scroll', () =>
  header.forEach(h => (h.style.color = 'goldenrod'))
)

// 3. mouseover (change images on hover)
const img = document.querySelectorAll('img')
const url = 'https://images.unsplash.com/photo-1456143077270-30de0a1bf7bc'

const onMouseOver = e => {
  e.target.src = url
}

img.forEach(item => item.addEventListener('mouseover', onMouseOver))

// 4. mouseout (bring back original image)
const src = []
for (i = 0; i < img.length; i++) {
  src.push(img[i].src)
}

img[0].addEventListener('mouseout', e => {
  e.target.src = src[0]
})

img[1].addEventListener('mouseout', e => {
  e.target.src = src[1]
})

img[2].addEventListener('mouseout', e => {
  e.target.src = src[2]
})

img[3].addEventListener('mouseout', e => {
  e.target.src = src[3]
})

// 5. cut (cut selected text with cmd+x)
const para = document.querySelectorAll('p')

para.forEach(item =>
  item.addEventListener('cut', () => {
    item.innerHTML = 'Text is cut.'
    item.style.color = 'cadetblue'
  })
)

// 6. copy (copy selected text with cmd+c)
para.forEach(item =>
  item.addEventListener('copy', () => {
    item.innerHTML = 'Text is copied.'
    item.style.color = 'lightcoral'
  })
)

// 7. paste (paste cut/copy text with cmd+v)
para.forEach(item =>
  item.addEventListener('paste', () => {
    item.innerHTML = 'Text is pasted.'
    item.style.color = 'orchid'
  })
)

// 8. contextmenu (change title text on right click)
const title = document.querySelector('.logo-heading')
title.addEventListener('contextmenu', () => {
  title.innerHTML = 'Web18!'
  title.style.color = 'palevioletred'
})

// 11. stop event propogation
const parentDiv = document.querySelector('.destination')
const childDiv = document.querySelector('.btn')

parentDiv.addEventListener('click', () => alert('Parent div click fired.'))
childDiv.addEventListener('click', e => {
  alert('Child div click fired. This may follow up with parent div click, if event propogation is not stopped.')
  e.stopPropagation()  // uncomment to see how the click event traverses up the DOM tree.
})
