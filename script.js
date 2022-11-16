// tangkap beberapa element
let modal = document.getElementById('modal');
let floating_button = document.getElementById('floating_button');
let modal_bg = document.getElementById('modal_bg');
let addlist_form = document.getElementById('addlist_form');
let root = document.getElementById('root');
let subtitle = document.getElementById("subtitle")

//tampilkan tanggal tanggal terupdate
subtitle.innerHTML = new Date().toLocaleString();


// list belanja
let listDataBelanja = [];

// buat funtion
floating_button.addEventListener('click', () => {
  if (modal.style.display == 'none') {
    showModal();
    return;
  }
  hiddeModal();
});

modal_bg.addEventListener('click', () => {
  hiddeModal();
});

addlist_form.addEventListener('submit', (e) => {
  // stop reload
  e.preventDefault();

  // tangkap nilai dan declarasi
  let barang = e.target.barang.value;
  let harga = e.target.harga.value;

  // push data belanja
  listDataBelanja.push({
    namaBarang: barang,
    hargaBarang: harga,
    tanggal: new Date().toLocaleString(),
  });
  console.info(listDataBelanja);

  // clear input field
  e.target.barang.value = '';
  e.target.harga.value = '';

  hiddeModal();
  renderToHtml();
});

function showModal() {
  modal.style.display = 'flex';
  floating_button.style.transform = 'rotate(45deg)';
  floating_button.style.background = 'white';
}

function hiddeModal() {
  modal.style.display = 'none';
  floating_button.style.transform = 'rotate(0deg)';
  floating_button.style.background = 'green';
}

function renderToHtml() {
  // clear id root
  root.innerHTML = '';

  // lakukan perulangan
  listDataBelanja.forEach((e, i) => {
    root.innerHTML += `
    <div class ="card">
      <small> ${e.tanggal}</small>
      <div>
        ${e.namaBarang} <span> Rp ${e.hargaBarang}</span>
      </div>
      <button onClick = "handleDelete(${i})">Selesai</button>
    </div>
    `;
  });
}

function handleDelete(index){
  listDataBelanja.splice(index, 1)
  renderToHtml()
}
