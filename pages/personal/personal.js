Page({
  data: {
   //判断小程序的API，回调，参数，组件等是否在当前版本可用。获取头像昵称
   canIUse: wx.canIUse('button.open-type.getUserInfo',),
   personList:{}
  },
  onLoad: function () {
   var that = this;
   // 查看是否授权
   wx.getSetting({
    success: function (res) {
     if (res.authSetting['scope.userInfo']) {
      wx.getUserInfo({    //获取
       success: function (res) {
        //从数据库获取用户信息
        const personList= JSON.parse(res.rawData)
        console.log(personList)
        that.setData({
          personList
        })
        // console.log(that.data.personList)
        that.queryUsreInfo();
        //用户已经授权过
        wx.navigateTo({
          url: '/pages/index/index' 
        })
       }
      });
     }
    }
   })
  },
  bindGetUserInfo: function (e) {
   if (e.detail.userInfo) {
    //用户按了允许授权按钮
    wx.navigateTo({
      // url: '/pages/index/index' 
    })
   } else {
    //用户按了拒绝按钮
    wx.showModal({
     title:'警告',
     content:'您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
     showCancel:false,
     confirmText:'返回授权',
     success:function(res){
      if (res.confirm) {
       console.log('用户点击了“返回授权”')
      } 
     }
    })
   }
  },
  //获取用户信息接口
  queryUsreInfo: function () {}
 })
 