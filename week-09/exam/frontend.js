'use strict';

const http = new XMLHttpRequest();

http.open('get', 'http://localhost:3000/get', true);
http.setRequestHeader('Content-Type', 'application/JSON');

http.onload = () => {
  const res = JSON.parse(http.responseText)
  const tbody = document.querySelector('tbody');
  res.rows.forEach((element, index) => {
    const button = document.createElement('button');
    const tr = document.createElement('tr');
    button.id = index;
    tbody.appendChild(tr);
    tr.appendChild(document.createElement('td')).innerHTML = element.attr_name;
    tr.appendChild(document.createElement('td')).innerHTML = element.city;
    tr.appendChild(document.createElement('td')).innerHTML = element.price;
    tr.appendChild(document.createElement('td')).innerHTML = element.longitude;
    tr.appendChild(document.createElement('td')).innerHTML = element.lattitude;
    tr.appendChild(document.createElement('td')).innerHTML = element.category;
    tr.appendChild(document.createElement('td')).innerHTML = element.duration;
    tr.appendChild(document.createElement('td')).innerHTML = element.recommended_age;
    tr.appendChild(button).innerHTML = 'Edit';
  });
  document.querySelector('table').addEventListener('click', (event) => {
    const form = document.querySelectorAll('form input[type="text"]');
    console.log(res.rows[event.target.id])
    console.log(form)
    form.forEach(element => {
      console.log(element.name)
      element.value= res.rows[event.target.id][element.name]
      })
  })
}
http.send()