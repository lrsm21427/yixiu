// pages/classview/classview.js
const db = wx.cloud.database().collection('yi_class');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTitle:'', /**定义内容 */
    showContent:'',
    showProList:[
     {title:'14种针法展示教学',content:'我是内容一'},
     {title:'一针一线 花开指畔',content:'我是内容二'},
    ],
    Title:[],
    content:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var goodsId = options.goodsId
    //  console.log(goodsId);
    var that = this;
    console.log(that.data);
    db.get({
      success:function(res) {
        console.log(res.data[0].Title[goodsId]);
        that.setData({
          showTitle:res.data[0].Title[goodsId],
          showContent:res.data[0].content[goodsId]
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // var that = this;
    // console.log(that.data);
    // db.get({
    //   success:function(res) {
    //     console.log(res.data[0].Title[goodsId]);
    //     that.setData({
    //       showTitle:res.data[0].Title[goodsId],
    //       showContent:res.data[0].content[showContent]
    //     })
    //   }
    // })
    // console.log(this.showTitle);
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