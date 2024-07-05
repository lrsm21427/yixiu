// pages/me/me.js
Page({

  
  /**
   * 页面的初始数据
   */
  data: {
    show:false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData:['推荐','2','3','4','5','6'],//下拉列表的数据
    index:0,//选择的下拉列表下标
    goodurl:[
      {
        name:'棉花娃娃',
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E5%B0%8F%E5%BD%9D.png',
        price:'￥66.0'
      },{
        name:'手链',
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E6%89%8B%E9%93%BE1.jpg',
        price:'￥16.0'
      },{
        name:'纯手工包包',
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E5%8C%85%E5%8C%851.jpg',
        price:'￥45.0'
      },{
        name:'小彝贴纸',
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E5%B0%8F%E5%BD%9D%E8%A1%A8%E6%83%85.jpg',
        price:'￥3.0'
      },{
        name:'小彝胶带',
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E8%83%B6%E5%B8%A64.jpg',
        price:'￥6.0'
      },{
        name:'手机壳',
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E6%89%8B%E6%9C%BA%E5%A3%B33.jpg',
        price:'￥15.0'
      },{
        name:'挂坠',
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E6%8C%82%E5%9D%A0.png',
        price:'￥20.0'
      },{
        name:'卡套',
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E5%8D%A1%E5%A5%973.png',
        price:'￥10.0'
      },
    ],
    keyword: ''
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
      url: '/pages/cloudview/cloudview?goodsId=0'
    })
    // TODO: 发起搜索请求
    console.log('搜索关键词：', keyword)
  },
  selectTap(){
    this.setData({
     show: !this.data.show
    });
    },
    // 点击下拉列表
    optionTap(e){
    let Index=e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
     index:Index,
     show:!this.data.show
    });
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