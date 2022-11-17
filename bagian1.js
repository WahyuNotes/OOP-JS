// 1) buat class
function CobaMakan() {
  this.firstname = "";
  this.lastname = "";
}

// 2) buat objek baru
const baru = new CobaMakan();
baru.firstname = "eko"; //isi objeknya

const baru2 = new CobaMakan();
baru2.lastname = "oki";

// console.log(baru);
// console.log(baru2);

// Contoh lain
function Testing() {
  this.firstname = "";
  this.lastname = "";

  //kalau mau memasukkan function ke dalam function
  this.fungsi = function (name) {
    console.info(
      `Hello ${name}, my name is ${this.firstname} ${this.lastname}`
    );
  };
}
const value = new Testing();
value.firstname = "Eko";
value.lastname = "Khannedy";
value.fungsi("budi");

console.log(value);
