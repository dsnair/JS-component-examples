// Step 3: define the class that will create a new object
class TabLink {
  constructor(link) {
    // assign this.link to the passed in DOM element
    this.link = link

    /*
    grab the value attached to 'data-tab', i.e. 1, 2, 3, 4
    - 'data-tab' is a custom data attribute
    - 'dataset.tab' gets all the 'data-' attributes that are named 'tab'
    */
    this.data = link.dataset.tab
    console.log('DATA', this.data) // returns 1, 2, 3, 4

    // get the 'div' associated to a 'data-tab'
    this.dataDiv = document.querySelector(`.tabs-item[data-tab='${this.data}']`)
    console.log('DATADIV', this.dataDiv)

    // using dataDiv, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.dataDiv)

    // add a click event listener on 'link', calling linkSelect() on click
    link.addEventListener('click', () => this.linkSelect())
  }

  linkSelect() {
    // get all of the elements with the '.tabs-link' class
    const links = document.querySelectorAll('.tabs-link')

    // using .forEach(), remove the 'tabs-link-selected' class from all of the links
    links.forEach(link => link.classList.remove('tabs-link-selected'))

    // add a class named 'tabs-link-selected' to this link
    this.link.classList.add('tabs-link-selected')

    // call itemSelect() on 'tabItem'
    this.tabItem.itemSelect()
  }
}

class TabItem {
  constructor(tabItem) {
    // assign this.tabitem to the passed in element
    this.tabItem = tabItem
  }

  itemSelect() {
    // select all '.tabs-item' elements from the DOM
    const items = document.querySelectorAll('.tabs-item')

    // remove the class 'tabs-item-selected' from each element
    items.forEach(item => item.classList.remove('tabs-item-selected'))

    // add a class named 'tabs-item-selected' to this element
    this.tabItem.classList.add('tabs-item-selected')
  }
}

/* 
START HERE: 
- Step 1: select all classes named '.tabs-link' and assign that value to the 'links' variable
- Step 2: iterate over the NodeList with .forEach() and return a new object 'link' from the callback
*/

const links = document.querySelectorAll('.tabs-link')
links.forEach(link => new TabLink(link))
