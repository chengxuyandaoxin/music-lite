// pages/search-a/search-a.js
var config = require('../../config.js'); //导入配置文件
Page({

  /**
   * 页面的初始数据
   */
  data: {
     ranks: [
       { type: 23, text: "畅销金唱片" }
     ],
     ranks1: [
       { type: 27, text: "最in最潮流" }
     ],
     ranks2: [
       { type: 19, text: "灵魂摇滚" }
     ],
     ranks3: [
       { type: 32, text: "原创音乐" },
     ],
     ranks4: [
       { type: 36, text: "K歌之王" }
     ],
  },
  // 搜索
  tapSearch: function () {
    wx.navigateTo({ url: '../search/search' });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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