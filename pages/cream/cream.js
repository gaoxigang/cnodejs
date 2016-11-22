//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    topics:[],
    lasttime:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

    var that = this
    wx.request({
      url: 'http://cnodejs.org/api/v1/topics?tab=good',
      method: 'GET', 
      success: function(res){
        // success
        
        that.setData({topics:res.data.data})
        console.log(that.data.topics)
        var datalength = res.data.data.length
        var lastime = []
        for (let i = 0; i < datalength; ++i) {          
          lastime[i] = app.getDateDiff(res.data.data[i].last_reply_at)
        }
        that.setData({lasttime:lastime})
        //console.log(lastime)
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
  },

  gotoContent:function(event){
    wx.navigateTo({
      url: '../topic/topic?id='+event.currentTarget.id,
      success: function(res){
        //console.log(event.currentTarget.id)
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
