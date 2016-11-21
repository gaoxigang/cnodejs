//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    topics:[],
    lasttime:null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

    var that = this
    wx.request({
      url: 'http://cnodejs.org/api/v1/topics',
      method: 'GET', 
      success: function(res){
        // success
        
        that.setData({topics:res.data.data})
        console.log(that.data.topics)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  },
  toUser:function(event){
    wx.navigateTo({
      url: '../user/user?id='+event.currentTarget.id,
      success: function(res){
        // success
        console.log(event.currentTarget.id)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
