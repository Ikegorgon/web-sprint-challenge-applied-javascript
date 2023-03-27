const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // Create the parent div with the header class
  const div = document.createElement('div');
  div.classList.add('header');

  // Create the date span element with the date class and fill with date argument
  const dateSpan = document.createElement('span');
  dateSpan.classList.add('date');
  dateSpan.innerHTML = date;

  // Create the title header 1 and fill with the title argument
  const titleHeader = document.createElement('h1');
  titleHeader.innerHTML = title;

  // Create the temp span element with the temp class and fill with the temp argument
  const tempSpan = document.createElement('span');
  tempSpan.classList.add('temp');
  tempSpan.innerHTML = temp;

  // Append the dateSpan, titleHeader, and tempSpan to the parent div
  div.appendChild(dateSpan);
  div.appendChild(titleHeader);
  div.appendChild(tempSpan);

  // Return the parent div
  return div;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
}

export { Header, headerAppender }
