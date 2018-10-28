// pages/lessondetail/lessondetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{},
    isTrain:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var lid=1;
    wx.request({
      url:"http://127.0.0.1:3000/lesson/details",
      method:"GET",
      data:{lid:lid},
      success:(res)=>{
        this.setData({
          list:res.data[0]
        })
        console.log(this.data.list)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})