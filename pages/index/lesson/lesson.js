// pages/lesson/lesson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toTop: false,
    selNum:"",
    selected:"../../../img/lesson/selected.png",
    white: "../../../img/lesson/white.png",
    sel1:false,
    sel2:false,
    hardSle:"综合排序",
    s:[true,false,false,false,false,false],
    b: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    lessonList:[],
    lessonTime:Math.ceil(Math.random()*20)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAllLesson();
  },
  getAllLesson:function(){
    wx.request({
      url: "http://127.0.0.1:3000/lesson/wxLessonAll",
      method: "GET",
      success: (res) => {
        var data = res.data;
        this.setData({
          lessonList: data,
        })
        console.log(this.data.lessonList)
      }
    })
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
    var hard=e.target.dataset.hard;
    var num=hard.slice(1,2);
    if(num==0){hard="综合排序"};
    var s=this.data.s;
    var newS=[];
    for(var i=0;i<s.length;i++){
      newS[i]=false;
      if(i==num){
        newS[i]=true
      }
    }
    this.setData({
      s:newS,
      hardSle:hard,
      sel1:false
    })
  },
  sel2Ctd:function(e){
    if (e.target.dataset.train){
      var num=e.target.dataset.train.slice(2);
      var newB=this.data.b;
      for(var i=0;i<newB.length;i++){
        if(i==num){newB[num]*= -1;}
      }
      console.log(num)
      this.setData({
        b:newB
      })
    }
  },
  sel2Clear:function(){
    this.setData({
      b: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
    })
  },
  sel2Srh:function(){
    console.log("发异步请求");
    this.setData({
      sel2:false
    })
  },
  selectAll:function(){
    this.getAllLesson();
  },
  getDetails:function(e){
    console.log(e.target.dataset.lid)
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