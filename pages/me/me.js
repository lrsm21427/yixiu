// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'name',
    userintroduction:'introduction',
    visitor:0,
    sumvisitor:999,
    trend:true,
    collect:false,
    trendcolor:"#515151",
    collectcolor:"#cdcdcd",
    trendbcolor:"red",
    collectbcolor:"#fff"
  },
  Selecttrend:function(){
    this.setData({
      collectcolor:"#cdcdcd",
      trendcolor:"#515151",
      trend:true,
      collect:false,
      trendbcolor:"red",
      collectbcolor:"#fff"
    })
  },
  Selectcutcollect:function(){
    this.setData({
      trendcolor:"#cdcdcd",
      collectcolor:"#515151",
      collect:true,
      trend:false,
      collectbcolor:"red",
      trendbcolor:"#fff"
    })
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