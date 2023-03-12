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
    allcolor:"#000",
    cutcolor:"#000",
    stores:[
      {
        id:0,
        name:"店铺1",
        num:0
      },
      {
        id:0,
        name:"店铺2",
        num:1
      },
      {
        id:0,
        name:"店铺3",
        num:2
      },
    ]
  },
  Selectall:function(){
    wx.clearStorage(),
    this.setData({
      all:true,
      cutprice:false,
      allcolor:"#ff0000",
      cutcolor:"#000",
    })
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
  Selectobject:function(){
    this.setData
  },
  Reduce:function(){
    console.log(this);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() { 
    wx.setNavigationBarTitle({
      title: '购物车',
    })
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