// DOM Selection
//document.querySelector() => menghasilkan element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '24px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

//document.querySelectorAll() => mengembalikan nodeList
const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
  p[i].innerHTML = 'ini diubah melalui javascript';
  p[i].style.backgroundColor = 'lightblue';
}