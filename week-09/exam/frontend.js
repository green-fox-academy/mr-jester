'use strict';

const http = new XMLHttpRequest();

http.open('get', 'http://localhost:3000/get', true);
// http.setRequestHeader('Content-Type', 'application/JSON');

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
    //tr.appendChild(document.createElement('td')).innerHTML = element.id
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
  const button = document.querySelector('.submitbtn');


  button.addEventListener('click', (e) =>{
    e.preventDefault();
    const http2 = new XMLHttpRequest();
    http2.open('POST' , 'http://localhost:3000/api/add');
    http2.setRequestHeader('Content-Type', 'application/json');
    const inputs = document.querySelectorAll('input')
    console.log(inputs)
    let x = {
      attr_name: inputs[0].value,
      city: inputs[1].value,
      category: inputs[2].value,
      price: inputs[3].value,
      longitude: inputs[4].value,
      lattitude: inputs[5].value,
      recommended_age: inputs[6].value,
      duration: inputs[7].value,
      id: inputs[8].value
    }
    http2.send(JSON.stringify(x));
  })
  http.open ('GET', 'http://localhost:3000/api/attractions', true);

}
  http.send()