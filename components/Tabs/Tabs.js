// Step 3: define the class that will create a new object
class TabLink {
  constructor(link) {
    // assign this.link to the passed in DOM element
    this.link = link

    // get the custom data attribute on the link
    this.data = this.link.dataset.tab

    // using the custom data attribute get the associated item element
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab='${this.data}']`
    )

    // using the item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement)

    // add a click event listener on this instance, calling select() on click
    this.link.addEventListener('click', () => this.select())
  }

  select() {
    // get all of the elements with the '.tabs-link' class
    const links = document.querySelectorAll('.tabs-link')

    // using .forEach(), remove the 'tabs-link-selected' class from all of the links
    links.forEach(link => link.classList.remove('tabs-link-selected'))

    // add a class named 'tabs-link-selected' to this link
    this.link.classList.add('tabs-link-selected')

    // call select() on the item associated with this link
    this.tabItem.select()
  }
}

// create a sub-component
class TabItem {
  constructor(tabItem) {
    // assign this.tabitem to the passed in element
    this.tabItem = tabItem
  }

  select() {
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
