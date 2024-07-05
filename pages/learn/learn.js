// pages/learn/learn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 'all',
    options: ['综合排序', '访问多', '点赞多'],
    selectedOption: '综合排序',
    text:[
      {ttip:'14种针法展示教学',url:'cloud://lrsm-9gaypsda289b7bdd.6c72-lrsm-9gaypsda289b7bdd-1314631262/u=3042835032,3398939578&fm=253&fmt=auto&app=120&f=PNG.webp'},
      {ttip:'一针一线 花开指畔',url:'cloud://lrsm-9gaypsda289b7bdd.6c72-lrsm-9gaypsda289b7bdd-1314631262/u=1896692877,1904738072&fm=74&app=80&size=f256,256&n=0&f=JPEG&fmt=auto.webp'}
    ],
    texttip:['14种针法展示教学','一针一线 花开指畔'],
    tip1_bool:true,
    tip2_bool:false,
    tip3_bool:false
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
    if (tabName === 'all'){
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
  onPickerChange:function (params) {
    console.log(params.detail.value);

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