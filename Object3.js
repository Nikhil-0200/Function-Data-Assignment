var sales = [
  { item: "PS4 Pro", stock: 3, original: 399.99 },
  { item: "Xbox One X", stock: 1, original: 499.99, discount: 0.1 },
  { item: "Nintendo Switch", stock: 4, original: 299.99 },
  { item: "PS2 Console", stock: 1, original: 299.99, discount: 0.8 },
  { item: "Nintendo 64", stock: 2, original: 199.99, discount: 0.65 },
];

let data = {
  arr: [],
  calculateSalesTotals: function () {
    for (let i = 0; i < sales.length; i++) {
      let obj = {};

      if (sales[i].discount != undefined) {
        obj.discount = sales[i].discount;
        obj.item = sales[i].item;
        obj.original = sales[i].original;
        obj.sale = sales[i].original - sales[i].original * sales[i].discount;
        obj.stock = sales[i].stock;
        obj.total = obj.sale * sales[i].stock;
      } else {
        obj.item = sales[i].item;
        obj.original = sales[i].original;
        obj.sale = sales[i].original;
        obj.stock = sales[i].stock;
        obj.total = obj.sale * sales[i].stock;
      }

      this.arr.push(obj);
    }

    return this.arr;
  },
};

console.log(data.calculateSalesTotals());