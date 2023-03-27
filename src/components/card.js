import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // Create the parent div element with the card class
  const div = document.createElement('div');
  div.classList.add('card');

  // Create the headline div with the headline class and fill with the headline data
  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = article.headline;

  // Create the author div with the author class
  const author = document.createElement('div');
  author.classList.add('author');

  // Create the image div with the img-container class
  const image = document.createElement('div');
  image.classList.add('img-container');

  // Create the img element with the authorPhoto as the src and append it to the image div
  const img = document.createElement('img');
  img.src = article.authorPhoto;
  image.appendChild(img);

  // Create the authorName span and fill with the authorName data
  const authorName = document.createElement('span');
  authorName.textContent = "By " + article.authorName;

  // Append the image and the authorname to the author div
  author.appendChild(image);
  author.appendChild(authorName);

  // Append the headline and the author to the parent div
  div.appendChild(headline);
  div.appendChild(author);

  // Return the parent div
  return div;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  // Select the corresponding selector in the DOM
  let element = document.querySelector(selector);

  // Get article list with axios
  axios.get("http://localhost:5001/api/articles")
    // Catch the response and pass each article to the Card component, then append it to the element
    .then(response => {
      for (let [key, value] of Object.entries(response.data.articles)) {
        for (let i = 0; i < value.length; i++) {
          element.appendChild(Card(value[i]));
        }
      }
    })
    // Catch the error and console log the message
    .catch((error) => {
      console.log(error);
    });
}

export { Card, cardAppender }
