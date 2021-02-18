//makes an http request to github using the fetch api and returns a list of my repos. Could be useful in the future for the portfolio page.
document.onload= fetch('https://api.github.com/users/danpetrow/repos')
  .then(response => response.json())
  .then(data => console.log(JSON.stringify(data)));