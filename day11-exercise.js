/*buat parent class Product
    constructor = nama, berat, price,stok

    buat child class dari produk yaitu Buku dan Pakaian 
    constructor = super, data unik dari buku dan pakaian 

    buat class OnlineShop
    constructor = products dan cart (private)
    method : 
        - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products return produk sudah ada dalam toko

        - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user arr cart. Harus validasi sudah ada apa belum dalam cart dan juga                  validasi ada tidak produknya di catalog, kalau yang di masukkan 
          melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

        - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir.example: 1km * 2000.tampilkan juga kembaliannya dan kosongkan cart jika              berhasil melakukan transaksi. Harus ada validasi
          untuk uangUser tidak boleh kurang dari total pembayaran.

        - showCatalog : menampilkan isi catalog dari toko

        - showCart : menampilkan isi cart user
        */

class Product {
  constructor(name, weight, price, stock) {
    this.name = name;
    this.weight = weight;
    this.price = price;
    this.stock = stock;
  }
}

class Book extends Product {
  constructor(name, weight, price, stock, author) {
    super(name, weight, price, stock);
    this.author = author;
  }
}
class Clothes extends Product {
  constructor(name, weight, price, stock, brand) {
    super(name, weight, price, stock);
    this.brand = brand;
  }
}

class OnlineShop {
  #cart;
  constructor() {
    this.products = [];
    this.#cart = [];
  }

  addProduct(product) {
    if (this.products.includes(product)) {
      return `${product} is already in catalog`;
    }
    if (!this.products.includes(product)) {
      return `${product} is not found`;
    }
    this.products.push(product);
    return `your ${product} is successfully added`;
  }

  addToCart(product, quantity) {
    if (this.#cart.includes(product)) {
      return `${product} is already in cart`;
    }
    if (!this.products.includes(product)) {
      return `${product} is not in catalog`;
    }
    if (quantity > product.stock) {
      return `unit is more than our stocks,please decrease the quantity`;
    }
    if (quantity === undefined) {
      return "please enter your quantity";
    }

    this.#cart.push(product, quantity);
  }

  transaction(UserMoney, distance) {
    if ()
  }

  showCatalog() {
    return this.products.push();
  }
  showCart() {
    return this.#cart.push();
  }
}

const shop = new OnlineShop();
const book = new Book("API", 0.75, 85000, 12, "AGUNG");
const clothes = new Clothes("beach shirt", 0.2, 125000, 15, "Adios");
console.log(clothes);
console.log(shop.addProduct(clothes));
