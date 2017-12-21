// pages/all/all.js
var config = require('../../config.js'); //导入配置文件




Page({
  data: {
    //list:'',

    //音乐分类
    ranks: [
      //{ type: 3, text: "欧美" },
      //{ type: 16, text: "韩国" },
      //{ type: 5, text: "内地" },
      //{ type: 6, text: "港台" },
      //{ type: 17, text: "日本" },
      { type: 23, text: "畅销榜" },
     // { type: 19, text: "摇滚" },
      //{ type: 18, text: "民谣" },
      //{ type: 28, text: "网络歌曲" },
      //{ type: 36, text: "K歌金曲" },
      //{ type: 21, text: "我是歌手" },
      //{ type: 22, text: "中国好歌曲" },
      //{ type: 29, text: "中国新歌声" } 
    ],
    ranks1: [
      { type: 19, text: "摇滚" }
    ],
    ranks2: [
      { type: 18, text: "民谣" }
    ],
    ranks3: [
      { type: 36, text: "K歌金曲" }
    ],
    ranks4: [
      { type: 21, text: "我是歌手" }
    ],
    ranks5: [
      { type: 22, text: "中国好歌曲" }
    ],
    ranks6: [
      { type: 29, text: "中国新歌声" }
    ],
    ranks7: [
      { type: 3, text: "欧美" }
    ],
    ranks8: [
      { type: 16, text: "韩国" }
    ],
    ranks9: [
      { type: 5, text: "内地" }
    ],
    ranks10: [
      { type: 6, text: "港台" }
    ],
    ranks11: [
      { type: 17, text: "日本" }
    ],
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
