//unfortunately very unsuccessful :(

'use strict';
function createNode(element) {
  return document.createElement(element);
}
function append(parent, div) {
  return parent.appendChild(div)
}
const div = document.getElementById('gifs');
fetch('https://api.giphy.com/v1/gifs/search?api_key=JA04SYCYuIvR6LwwMYG3ZjH3GQHuG7hY&q=dog&limit=16&offset=0&rating=G&lang=en')
  .then((result) => result.json())
  .then (function (data){
    let res = JSON.parse(httprequest.responseText)
    const container = document.querySelector('#pics');
    res.data.forEach(element => {
      console.log(element.id)
      const div = document.createElement('div');
      const image = document.createElement('img');
  
      image.src = element.images.fixed_width_still.url;
      image.addEventListener('click', () => {
        image.setAttribute('src', element.images.fixed_width.url)
      })
      container.appendChild(image);
    });
  
  })

