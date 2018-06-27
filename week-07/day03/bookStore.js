console.log('something');
const request = new XMLHttpRequest();
request.open('GET','http://localhost:3000/test/',true);
request.onload = () =>{
  let res = JSON.parse (request.responseText)
  console.log(response);
  const container = document.querySelector('#tables')
  res.data.forEach(element => {
    const tr = document.createElement('tr')
    const data = document.createElement('data')
    container.appendChild(data);
  });
}
request.send();