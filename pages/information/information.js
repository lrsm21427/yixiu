// pages/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword: '',
  },

  onSearch: function() {
    const keyword = this.data.keyword.trim()
    if (keyword === '') {
      wx.showToast({
        title: '请输入关键词',
        icon: 'none'
      })
      return
    }
    wx.navigateTo({
      url: '/pages/searchpage/searchpage'
    })
    // TODO: 发起搜索请求
    console.log('搜索关键词：', keyword)
  },
  onInput: function(e) {
    this.setData({
      keyword: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const keyword = options.keyword
    console.log('搜索关键词：', keyword)
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