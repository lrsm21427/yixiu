// pages/cloud/cloud.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 'discover',
    options: ['图片展示', '图片文字'],
    selectedOption: '图片展示',
    imageurl:[
      {
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E5%B0%8F%E5%BD%9D2.png'
      },{
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E5%B0%8F%E5%BD%9D3.png'
      },{
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E5%B0%8F%E5%BD%9D%E8%B9%A6%E8%B9%A6.jpg'
      },{
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E5%B0%8F%E5%BD%9D.png'
      }
    ],
    keyword: '',
    tip1_bool:true,
    tip2_bool:false,
    tip3_bool:false

  },
  onInput: function(e) {
    this.setData({
      keyword: e.detail.value
    })
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
      url: '/icon/浏览.png'
    })
    // TODO: 发起搜索请求
    console.log('搜索关键词：', keyword)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const keyword = options.keyword
    // TODO: 根据关键词进行搜索
    console.log('搜索关键词：', keyword)
  },
  changeTab: function (event) {
    var tabName = event.currentTarget.dataset.name;
    if (tabName === 'courses'){
      this.setData({
        tip1_bool: false,
        tip2_bool: true,
        tip3_bool: false,
      });
    }
    if (tabName === 'history'){
      this.setData({
        tip1_bool: false,
        tip2_bool: false,
        tip3_bool: true,
      });
    }
    if (tabName === 'discover'){
      this.setData({
        tip1_bool: true,
        tip2_bool: false,
        tip3_bool: false,
      });
    }
    console.log(this.data.tip1_bool);
    console.log(this.data.tip2_bool);
    console.log(this.data.tip3_bool);
    var activeTab = this.data.activeTab;
    if (tabName !== activeTab) {
      this.setData({
        activeTab: tabName
      });
    }
  },
  onPickerChange: function(e) {
    var index = e.detail.value;
    var selectedOption  = this.data.options[index];
    this.setData({
      selectedOption: selectedOption
    });
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