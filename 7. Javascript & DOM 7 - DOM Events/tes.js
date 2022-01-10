const p3 = document.getElementsByTagName('p')[2];
const p2 = document.querySelector('section#a p.p2');
const p4 = document.querySelector('section#b p');

function ubahWarnaP3() {
  p3.style.backgroundColor = 'red';
}

function ubahWarnaP2() {
  p2.style.backgroundColor = 'blue';
}
p2.onclick = ubahWarnaP2;

p4.addEventListener('click', function () {
  const ul = document.querySelector('section#b ul');
  const liBaru = document.createElement('li');
  const teksLiBaru = document.createTextNode('New Element');
  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
});