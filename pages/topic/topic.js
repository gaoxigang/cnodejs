var app = getApp()
Page({
  data:{
    topic:[],
    lasttime:null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    //console.log(options.id)
    var that = this;
    var lastime = null;
    wx.request({
      url: 'http://cnodejs.org/api/v1/topic/'+options.id+'?mdrender=false',
      method: 'GET', 
      success: function(res){
        // success
        console.log(res.data.data)
        that.setData({topic:res.data.data})

        lastime = app.getDateDiff(res.data.data.create_at)
        that.setData({lasttime:lastime})
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