class Dropdown {
  constructor(dropdown) {
    // assign this.dropdown to the dropdown element
    this.dropdown = dropdown

    // assign this.button to '.dropdown-button' class found in index.html
    this.button = dropdown.querySelector('.dropdown-button')

    // assign this.content to '.dropdown-content' class found index.html
    this.content = dropdown.querySelector('.dropdown-content')

    // add a click handler to the button reference and call the toggleContent method
    this.button.addEventListener('click', () => this.toggleContent())
  }

  toggleContent() {
    // toggle the '.dropdown-hidden' class off and on
    this.content.classList.toggle('dropdown-hidden')
  }
}

// nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document
  .querySelectorAll('.dropdown')
  .forEach(dropdown => new Dropdown(dropdown))