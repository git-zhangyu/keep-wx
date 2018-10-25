// pages/lesson/lesson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toTop: false,
    selNum:"",
    selected:"../../img/lesson/selected.png",
    white: "../../img/lesson/white.png",
    sel1:false,
    sel2:false,
    hard:"综合排序",
    s:[true,false,false,false,false]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onPageScroll: function (e) {
    if(e.scrollTop>200){
      wx.hideTabBar({
        animation:true,
        success:()=>{
          this.setData({
            toTop:true
          })
        }
      });
    }else{
      wx.showTabBar({
        animation:true,
        success:()=>{
          this.setData({
        toTop: false,
        })
      }
    });
    }
  },
  toTop: function (e) { // 一键回到顶部
      if (wx.pageScrollTo) {
        wx.pageScrollTo({
          scrollTop: 0
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
        })
      };
      wx.showTabBar({
        animation: true,
        success: () => {
          this.setData({
            toTop: false,
          })
        }
      });
    },

  selHard:function(){
    if(this.data.sel1){
      this.setData({
        sel1: false,
        sel2: false
      })
    }else{
    this.setData({
      sel1:true,
      sel2:false
    })
  }
  },
  selBody: function () {
    if (!this.data.sel2) {
      this.setData({
        sel1: false,
        sel2: true
      })
    } else {
      this.setData({
        sel1: false,
        sel2: false
      })
    }
  },
  sel1Ctd:function(e){
    console.log(e)
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