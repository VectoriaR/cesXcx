Page({
  data: {
    background: [
      "/pages/imgs/girl.jpg",
      "/pages/imgs/miao.jpg",
      "/pages/imgs/girl.jpg"
    ],
    indicatorDots: true, //
    vertical: false, //滑动方向为纵向
    autoplay: true, //自动播放
    interval: 2000, //时间间隔
    duration: 500 //滑动时长
  },
  golist(e) {
    const { type } = e.currentTarget.dataset; //解构
    wx.navigateTo({
      url: `/pages/list/list?type=${type}`
    });
  },
  cesBtn(){
    wx.makePhoneCall({
      phoneNumber: '15280930781',
    })
  },
  handleContact (e) {
    console.log(e.detail.path)
    console.log(e.detail.query)
},
routerChange(){
  wx.navigateTo({
    url: '/pages/detail/detail',
  })
}
})