Page({
  data:{
    userinfo:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    //console.log(options.id)
    var that = this;
    wx.request({
      url: 'http://cnodejs.org/api/v1/user/'+options.id,      
      method: 'GET',
      success: function(res){
        console.log(res.data)
        that.setData({userinfo:res.data.data})
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
    
  }
})