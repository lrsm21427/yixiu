// pages/Shopping/Shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query:{},
    shopList:[],
    total:4,
    all:true,
    cutprice:false,
    allcolor:"#ff0000",
    cutcolor:"#000",
    stores:[
      {
        id:1,
        image:"/icon/手机壳1.jpg",
        name:"特色饰品店",
        good:'特色手机壳',
        introduction:'集美观与实用性为一体的手机壳',
        price:16.00,
        quantity:1,
        isSelect:false
      },
      // {
      //   id:2,
      //   image:"cloud://lrsm-9gaypsda289b7bdd.6c72-lrsm-9gaypsda289b7bdd-1314631262/index_good1.png",
      //   name:"特色饰品店",
      //   good:'纯手工民族手包',
      //   introduction:'纯手工制作',
      //   price:66.00,
      //   quantity:1
      // },
      {
        id:2,
        image:"/icon/包包.jpg",
        name:"特色饰品店",
        good:'特色手工包',
        introduction:'纯手工便携',
        price:10.00,
        quantity:1,
        isSelect:false
      },
    ],
    totalPrice: 0,
    isSelected: false
  },
  decreaseQuantity: function (event) {
    const index = event.currentTarget.dataset.index;
    const cartItems = this.data.stores;
    if (cartItems[index].quantity > 1) {
      cartItems[index].quantity--;
      this.setData({
        stores: cartItems
      });
      this.calculateTotalPrice();
    }
  },

  increaseQuantity: function (event) {
    const index = event.currentTarget.dataset.index;
    const cartItems = this.data.stores;
    cartItems[index].quantity++;
    this.setData({
      stores: cartItems
    });
    this.calculateTotalPrice();
  },

  calculateTotalPrice: function () {
    const cartItems = this.data.stores;
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
      if(cartItems[i].isSelect){
        totalPrice += cartItems[i].price * cartItems[i].quantity;
      }
    }
    this.setData({
      totalPrice: totalPrice
    });
  },
  selectAll: function (event) {
    const isSelected = event.detail.value.length > 0;
    const cartItems = this.data.stores;
    for (let i = 0; i < cartItems.length; i++) {
      cartItems[i].isSelect = !cartItems[i].isSelect
    }
    // if(isSelected){
    //   for (let i = 0; i < cartItems.length; i++) {
    //     cartItems[i].isSelect = flase
    //   }
    // }
    this.setData({
      isSelected: isSelected,
      stores:cartItems
    });
    this.calculateTotalPrice();
  },
  Selectcutprice:function(){
    wx.clearStorage(),
    this.setData({
      all:false,
      cutprice:true,
      allcolor:"#000",
      cutcolor:"#ff0000",
    })
  },
  Selectallobject:function(){
    wx.clearStorage(),
    this.setData({
      all:true,
      cutprice:false,
      allcolor:"#ff0000",
      cutcolor:"#000",
    })
  },
  Selectobject:function(){
    this.setData
  },
  Reduce:function(){
    console.log(this);
  },
  toggleSelection: function (event) {
    const index = event.currentTarget.dataset.index;
    const cartItems = this.data.stores;
    console.log(index);
    cartItems[index].isSelect = !this.data.stores[index].isSelect;
    this.setData({
      stores:cartItems
    });
    this.calculateTotalPrice();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.calculateTotalPrice();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() { 
    wx.setNavigationBarTitle({
      title: '购物车',
    })
    this.calculateTotalPrice();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})