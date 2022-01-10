// element.inner.HTML
const h1Judul = document.getElementById('judul');
h1Judul.innerHTML = 'BaysCode';

// element.style.<property CSS>
const p1 = document.getElementsByTagName('p');
p1[0].style.backgroundColor = 'skyblue';

// element.setAttribute() dikelola dengan method lain element.getAttribute() & element.removeAttribute()
// attribute itu sesuatu yang menempel pada elemen html

const judulh1 = document.getElementById('judul');
judulh1.setAttribute('name','judulPertama'); // Menambahkan attribute
judulh1.getAttribute('name'); // Cara melihat attribute 
// judulh1.removeAttributeNS('name'); // Cara menghapus attribute


// element.classList = untuk mengelola class 
const p2 = document.getElementsByClassName('p2');
p2.classList.add('label'); // untuk menambahkan class baru
p2.classList.remove('label'); // untuk menghapus class
p2.classList.toggle('label'); // jika sebuah elemen tidak punya class maka dia menambahkan,tapi begitu sudah punya class toggle akan menghilangkan
p2.classList.item('p2');
console.log(p2);