/* 
Because classes are not hoisted you will need to start your code at the bottom of the page.  
Look for the comment "START HERE". 
*/

// Step 3. Build the Article base class
class Article {
  constructor(article) {
    // 1. assign this.article to the single passed in article
    this.article = article

    // 2. create a reference to the '.expandButton' class
    this.expandButton = article.querySelector('.expandButton')

    // 3. using your expandButton reference, update the text on your expandButton to say 'Expand'
    this.expandButton.innerHTML = 'Expand'

    // 4. set a click handler on the expandButton reference, calling the expandArticle method
    this.expandButton.addEventListener('click', () => this.expandArticle())
  }

  expandArticle() {
    // using our reference to 'article', toggle a LESS class to expand or hide the article
    this.article.classList.toggle('article-open')
  }
}

/* 
START HERE: 
- Select all classes named '.article' and assign that value to the articles variable.  
- With your selection in place, now chain .forEach() on to the 'articles' variable to iterate over the articles NodeList and create a new instance of 'Article' by passing in each article as a parameter to the 'Article' class.
*/

// Step 1. Get the original DOM elements
const articles = document.querySelectorAll('.article')

// Step 2. Return a newly constructed DOM element
articles.forEach(article => new Article(article))