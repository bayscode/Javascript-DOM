// DOM Selection
// document.getElementById() => mengembalikan 1 element
// diawalnya harus ada node root(default) nya => document
const judul = document.getElementById('judul');
judul.style.color = 'blue';
judul.style.backgroundColor = 'red';
judul.innerHTML = 'BaysCode';

// document.getElementsByTagName() => mengembalikan HTML Collection
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'skyblue';
}

const h1 = document.getElementsByTagName('h1'); // kalau mau mau mengubah tagname jadi element
h1[0].style.fontSize = '50px';

// document.getElementsByClassName() => mengembalikan HTML Collection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'ini diubah dari javascript';