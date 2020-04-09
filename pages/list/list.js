// pages/list/list.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    type: "",
    title: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //请求电影的数据列表
    console.log(options);
    console.log(options instanceof Object);
    const { type } = options;
    if (type === "zzsy") {
      this.setData({ title: "正在热映的电影" });
    } else if (type === "jjsy") {
      this.setData({ title: "即将上映的电影" });
    } else {
      this.setData({ title: "TOP250" });
    }
    const url = `http://localhost:3000/movieList?type=${type}`;
    wx.showLoading({ title: "加载中..." });
    //发送ajax请求
    wx.request({
      url,
      success: res => {
        console.log("res", res);
        this.setData({
          list: res.data.data
        });
      },
      //成功与否都会执行的函数
      complete() {
        wx.hideLoading();
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
