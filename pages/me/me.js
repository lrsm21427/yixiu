const app = getApp()

// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'小彝',
    username_bool:false,
    bt_bool:true,
    icon_url:'cloud://lrsm-9gaypsda289b7bdd.6c72-lrsm-9gaypsda289b7bdd-1314631262/user_icon.png',
    userintroduction:'这个人很懒，什么也没留下',
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
    this.setData({
      userInfo: app.globaDate.userInfo
    })
  },
  login(){
    var that = this;
    wx.getUserProfile({
      desc: '用于信息完善',
      success(res){
        console.log(res);
        var user = res.userInfo
        app.globaDate.userInfo = user

        that.setData({
          username_bool:true,
          bt_bool:false,
          username:user.nickName,
          icon_url:user.avatarUrl
        })
        //检查数据库用户是否存在  
        wx.cloud.database().collection('yi_log_users').where({
          _openid:app.globaDate.openid
        }).get({
          success(res){
            console.log(res);
            if(res.data.length == 0){
              wx.cloud.database().collection('yi_log_users').add({
                data:{
                  avatarUrl:res.userInfo.avatarUrl,
                  nickName:res.userInfo.nickName
                },
                success(res){
                  console.log(res);
                  wx.showToast({
                    title: '登录成功',
                  })
                }
              })
            }else{
              that.setData({
                userInfo:res.data[0]
              })
            }
          }
        })


        //增加数据库信息
      }
    })
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