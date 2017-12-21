//index.js
var config = require('../../config.js'); //导入配置文件
var util = require('../../utils/util.js');


var app = getApp();
Page({
  data: {
    song: {},  //传入的歌曲信息
    isPlaying: false, //播放状态
    //list:'',
    //音乐分类
    ranks: [
      { type: 3, text: "欧美" }
    ],
    ranks1:[
      { type: 16, text: "韩国" }
    ],
    ranks2:[
      { type: 5, text: "内地" }
    ],
    ranks3:[
      { type: 6, text: "港台" },
    ],
    ranks4:[
      { type: 17, text: "日本" }
    ],
    rankss: [
      { type: 27, text: "新歌" }
    ],
    ranksss2: [
      { type: 32, text: "音乐人" },
    ],
    ranksss1: [
      { type: 26, text: "热歌" },
    ],
    ranksss: [
      { type: 4, text: "流行榜" },
    ],
  },

  bind: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  },

  binding: function () {
    wx.navigateTo({
      url: '../allmin/allmin'
    })
  },

  binds: function () {
    wx.navigateTo({
      url: '../all/all'
    })
  },

  bindViewIcon: function () {
    wx.navigateTo({
      url: '../about-mid/about-mid'
    })
  },

  bindViewTap: function () {
    wx.navigateTo({
      url: '../play/play'
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  },

  onLoad: function (options) {
    var self = this;
    var songid = options.songid; //获取页面跳转传过来的参数(歌曲对象)
    if (songid === undefined) { //未传入歌曲ID
      var curSong = wx.getStorageSync('curSong') || {}; //从缓存中获取歌曲
      if (curSong === undefined) { //缓存中无歌曲
        var song = { songname: '未选择歌曲' }; //显示未选择歌曲
        this.setData({
          song: song,
        })
      } else {
        this.setData({
          song: curSong
        });
      }
    } else {
      var songlist = wx.getStorageSync('songlist') || []; //从缓存中取出歌曲列表
      //在歌曲列表中查找songid指定的歌曲
      for (var i = 0; i < songlist.length; i++) {
        if (songlist[i].songid == songid) {  //找到对应的歌曲        
          this.setData({
            song: songlist[i]   //更新歌曲
          });
          break;
        }
      }
      //缓存正在播放的歌曲
      wx.setStorageSync('curSong', this.data.song);
    }
  },
  onShow: function () {
    var self = this;
    var songid = songid; //获取页面跳转传过来的参数(歌曲对象)
    if (songid === undefined) { //未传入歌曲ID
      var curSong = wx.getStorageSync('curSong') || {}; //从缓存中获取歌曲
      if (curSong === undefined) { //缓存中无歌曲
        var song = { songname: '未选择歌曲' }; //显示未选择歌曲
        this.setData({
          song: song,
        })
      } else {
        this.setData({
          song: curSong
        });
      }
    } else {
      var songlist = wx.getStorageSync('songlist') || []; //从缓存中取出歌曲列表
      //在歌曲列表中查找songid指定的歌曲
      for (var i = 0; i < songlist.length; i++) {
        if (songlist[i].songid == songid) {  //找到对应的歌曲        
          this.setData({
            song: songlist[i]   //更新歌曲
          });
          break;
        }
      }
      //缓存正在播放的歌曲
      wx.setStorageSync('curSong', this.data.song);
    }
  },
  
  /**
 * 页面相关事件处理函数--监听用户下拉动作
 */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  }

  })
