// pages/history/history.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    history:[]
  },
 
  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    this.setData({history:wx.getStorageSync('history')})
  },
  
  onTapItem:function(e){
    wx.reLaunch({
      url: '/pages/index/index?query=${e.currentTarget.dataset.query}',
    })
  },
  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})