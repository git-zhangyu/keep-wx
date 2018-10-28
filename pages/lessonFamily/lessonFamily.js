// pages/lessonFamily/lessonFamily.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    familyList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLesson();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  getLesson:function(){
    wx.request({
      url: "http://127.0.0.1:3000/lesson/",
      method:"GET",
      success:(res)=>{
        this.setData({
          familyList:res.data
        })
        console.log(this.data.familyList);
      }
    })
  },
  navTo:function(e){
    wx.navigateTo({
          url: `lessonList/lessonList?family_id=${e.target.dataset.familyid}`
        })
  },
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