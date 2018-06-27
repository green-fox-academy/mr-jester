'use strict';

let http = new XMLHttpRequest();


http.open('GET', 'http://localhost:3000/test/allbooks', true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  console.log(response);
  let baseTable = document.querySelector('table');
  for (let i = 0; i < response.authors.length; i++) {
    let oneRow = document.createElement('tr');
    baseTable.appendChild(oneRow);
    let block1 = document.createElement('td');
    oneRow.appendChild(block1);
    block1.innerText = response.authors[i].book_name;
    let block2 = document.createElement('td');
    oneRow.appendChild(block2);
    block2.innerText = response.authors[i].cate_descrip;
    let block3 = document.createElement('td');
    oneRow.appendChild(block3);
    block3.innerText = response.authors[i].aut_name;
    let block4 = document.createElement('td');
    oneRow.appendChild(block4);
    block4.innerText = response.authors[i].pub_name;
    let block5 = document.createElement('td');
    oneRow.appendChild(block5);
    block5.innerText = response.authors[i].book_price;
  }
}


http.send();