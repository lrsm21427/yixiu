// cart.js
Page({
  data: {
    cartItems: [
      { id: 1, name: '商品1', image:"/icon/包包.jpg", price: 10, quantity: 2 },
      { id: 2, name: '商品2', image:"cloud://lrsm-9gaypsda289b7bdd.6c72-lrsm-9gaypsda289b7bdd-1314631262/index_good2.png",price: 15, quantity: 1 },
      { id: 3, name: '商品3', image:"cloud://lrsm-9gaypsda289b7bdd.6c72-lrsm-9gaypsda289b7bdd-1314631262/index_good2.png", price: 20, quantity: 3 }
    ],
    totalPrice: 0
  },

  onLoad: function () {
    this.calculateTotalPrice();
  },

  decreaseQuantity: function (event) {
    const index = event.currentTarget.dataset.index;
    const cartItems = this.data.cartItems;
    if (cartItems[index].quantity > 1) {
      cartItems[index].quantity--;
      this.setData({
        cartItems: cartItems
      });
      this.calculateTotalPrice();
    }
  },

  increaseQuantity: function (event) {
    const index = event.currentTarget.dataset.index;
    const cartItems = this.data.cartItems;
    cartItems[index].quantity++;
    this.setData({
      cartItems: cartItems
    });
    this.calculateTotalPrice();
  },

  calculateTotalPrice: function () {
    const cartItems = this.data.cartItems;
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalPrice += cartItems[i].price * cartItems[i].quantity;
    }
    this.setData({
      totalPrice: totalPrice
    });
  }
})
