// app.js
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.cloud.init({
      env:"lrsm-9gaypsda289b7bdd"
    })

    //get openid
    var that = this;
    wx.cloud.callFunction({
      name:'login_get_openid',
      success(res){
        console.log(res);
        that.globaDate.openid = res.result.openid

        wx.cloud.database().collection('yi_log_users').where({
          _openid:res.result.openid
        }).get({
          success(result){
            console.log(result);
            that.globaDate.userInfo = result.data[0]
          }
        })
      }
    })

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globaDate:{
    userInfo:null,
    openid:null
  }
})

