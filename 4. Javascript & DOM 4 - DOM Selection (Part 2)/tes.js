// document.querySelector() => query itu artinya menanyakan mengenai selector, selector yang dimaksud disini bisa dianggap sebagai selector CSS => Menghasilkan element (1)
const paragraf1 = document.querySelector('section#b p');
paragraf1.style.backgroundColor = 'salmon';

const listItem2 = document.querySelector('section#b ul li:nth-child(2)');
listItem2.style.color = 'red';
listItem2.style.listStyle = 'none';


// document.querySelectorAll => akan memilih semua elemen yang ada dihalaman 
const p4 = document.getElementsByTagName('p')[3];
p4.style.color = 'yellow'

// cara lain nya
const sectionB = document.getElementById('b');
const pAwal = sectionB.getElementsByTagName('p')[0];
pAwal.style.backgroundColor = 'darkblue'