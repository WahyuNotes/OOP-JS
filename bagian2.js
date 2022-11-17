/*
Selain itu kita dapat membuat objek dengan mengirim parameter pada class
*/

// 1) buat class dengan parameter
function CobaMakan(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

// 2) buat objek baru
const baru = new CobaMakan("eko", "patrio");
const baru2 = new CobaMakan("eko");

console.log("terima 2 param dan kirim 2 param", baru);
console.log("terima 2 param dan kirim 1 param", baru2);
