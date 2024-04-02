let cart = {
  name: ["Rice", "Dal", "Salt"],
  quantity: [2, 3, 1],
  price: [60, 50, 20],

  total: function () {
    let result = 0;
    for (let i = 0; i < this.name.length; i++) {
      result += this.quantity[i] * this.price[i];
    }
    console.log(result);
  },
};

cart.total();
