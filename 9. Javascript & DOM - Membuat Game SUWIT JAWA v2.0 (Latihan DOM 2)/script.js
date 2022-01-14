function getPilihanKomputer() {

  const comp = Math.random();
  if (comp < 0.34) return 'gajah';
  if (comp >= 0.34 && comp < 0.67) return 'orang';
  return 'semut';

}

function getHasil(komp, pemain) {

  if (pemain == komp) return 'SERI!';
  if (pemain == 'gajah') return (komp == 'orang') ? 'MENANG!' : 'KALAH!';
  if (pemain == 'orang') return (komp == 'gajah') ? 'KALAH!' : 'MENANG!';
  if (pemain == 'semut') return (komp == 'orang') ? 'KALAH' : 'MENANG!';

}

function putar() {
  const imgKomputer = document.querySelector('.img-komputer');
  const gambar = ['gajah', 'semut', 'orang'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgKomputer.setAttribute('src', 'img/' + gambar[i++] + ' .png');
    if (i == gambar.length) i = 0;
  }, 100) 
}



const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
  pil.addEventListener('click', function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPemain = pil.className;
    const hasil = getHasil(pilihanKomputer, pilihanPemain);

    putar();

    const imgKomputer = document.querySelector('.img-komputer');
    imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
  });
});



// // Pilihan Gajah/Jempol
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanPemain = pGajah.className;
//   const hasil = getHasil(pilihanKomputer, pilihanPemain);
//   // console.log('comp : ' + pilihanKomputer);
//   // console.log('plaayer : ' + pilihanPemain);
//   // console.log('hasil ' + hasil);

//   const imgKomputer = document.querySelector('.img-komputer');
//   imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });

// // Pilihan Orang/Telunjuk
// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanPemain = pOrang.className;
//   const hasil = getHasil(pilihanKomputer, pilihanPemain);
//   const imgKomputer = document.querySelector('.img-komputer');
//   imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });

// // Pilihan Semut/Telingking
// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanPemain = pSemut.className;
//   const hasil = getHasil(pilihanKomputer, pilihanPemain);
//   const imgKomputer = document.querySelector('.img-komputer');
//   imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });