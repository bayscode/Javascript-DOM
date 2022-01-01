// DOM Selection
// getElementById => javascript tolong dong carikan element yang id nya apa? yang ada didalam document(node root).
// caranya bikin dulu variabel untuk menampung element yang akan diseleksi
// getElementById => mengembalikan 1 element
const h1 = document.getElementById('judul');
h1.style.backgroundColor = 'salmon';
h1.style.color = '#fff';
h1.innerHTML = 'BaysCode';


// getElementsByTagName() => javascript tolong carikan element" yang nama tag nya apa?
// getElementsByTagName = mengembalikan HTML Collection
const paragraf = document.getElementsByTagName('p');
for (let i = 0; i < paragraf.length; i++) {
  paragraf[i].style.color = 'red';
}

// kalau pake TagName tetapi element nya satu pake index[0]
const judulH2 = document.getElementsByTagName('h2');
judulH2[0].style.color = 'blue';

// getElementByClassName() => car elemen" yang nama class nya apa?
// mengembalikkan HTML Collection
const paragraf1 = document.getElementsByClassName('p1');
paragraf1[0].style.color = 'violet';