const ubahWarna = document.getElementById('ubahWarna');
const body = document.getElementsByTagName('body')[0];
ubahWarna.addEventListener('click', function () {
  // body.style.backgroundColor = 'skyblue';
  // body.setAttribute('class', 'biru-muda');
  body.classList.toggle('biru-muda');
});

const acakWarna = document.createElement('button');
const teksButton = document.createTextNode('Acak Warna');
acakWarna.appendChild(teksButton);
acakWarna.setAttribute('type', 'button');
ubahWarna.after(acakWarna);

acakWarna.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  console.log(r);
  body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function () {
  // console.log(sMerah.value);
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sHijau.addEventListener('input', function () {
  // console.log(sHijau.value);
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sBiru.addEventListener('input', function () {
  // console.log(sBiru.value);
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


body.addEventListener('mousemove', function (event) {
  // Posisi Mouse (ada 2 sumbu X dan Y)
  // console.log(event.clientX);
  // Ukuran Browser
  // console.log(window.innerWidth);
  const xRPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yGPos = Math.round((event.clientY / window.innerHeight) * 255);
  body.style.backgroundColor = 'rgb(' + xRPos + ',' + yGPos + ',100)';
});