class TabLink {
  constructor(tabElement) {
    // assign 'this.tabElement' to the passed in element
    this.tabElement = tabElement

    // get the `data-tab` value from 'this.tabElement' and store it here
    this.tabData = tabElement.dataset.tab

    /* 
    We need to find out if a user clicked 'all' cards or a specific category. 
    Follow the instructions below to accomplish this task: 
    */

    // check if 'this.tabData' is equal to 'all'
    if (this.tabData === 'all') {
      // if 'all' is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card')
    } else {
      // else if 'all' is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(
        `.card[data-tab='${this.tabData}']`
      )
    }

    /* 
    Map over the newly converted NodeList we just created in our if statement above. 
    Convert each this.cards element into a new instance of the TabCard class. 
    Pass in a card object to the TabCard class.
    */
    this.cards = Array.from(this.cards).map(card => new TabCard(card))

    // add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => this.selectTab())
  }

  selectTab() {
    // select all elements with the '.tab' class on them
    const tabs = document.querySelectorAll('.tab')

    // iterate through the NodeList removing the 'active-tab' class from each element
    tabs.forEach(tab => tab.classList.remove('active-tab'))

    // select all of the elements with the '.card' class on them
    const cards = document.querySelectorAll('.card')

    // iterate through the NodeList setting the display style for each one to 'none'
    cards.forEach(card => (card.style.display = 'none'))

    // add a class of 'active-tab' to 'this.tabElement'
    this.tabElement.classList.add('active-tab')

    /* 
    Notice we are looping through 'this.cards' array and invoking selectCard() from the TabCard class. Study what is happening here.
    */
    this.cards.forEach(card => card.selectCard())
  }
}

class TabCard {
  constructor(cardElement) {
    // assign 'this.cardElement' to the passed in element
    this.cardElement = cardElement
  }
  selectCard() {
    // update the style of 'this.cardElement' to display = 'flex'
    this.cardElement.style.display = 'flex'
  }
}

/* 
START HERE: 
1. select all classes named '.tab' and assign it to the 'tabs' variable
2: iterate over the NodeList with .forEach(). From its callback, using the 'TabLink' class, return a new object 'tab'
*/

const tabs = document.querySelectorAll('.tab')
tabs.forEach(tab => new TabLink(tab))
