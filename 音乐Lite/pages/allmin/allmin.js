// pages/allmin/allmin.js
var config = require('../../config.js'); //导入配置文件




Page({
  data: {
    //list:'',

    //音乐分类
    ranks: [
      { type: 27, text: "新歌" },
                 //{ type: 32, text: "音乐人" },
                  //{ type: 26, text: "热歌" },
                //{ type: 4, text: "流行榜" },
      //{ type: 3, text: "欧美" },
     // { type: 16, text: "韩国" },
      //{ type: 5, text: "内地" },
      //{ type: 6, text: "港台" },
      //{ type: 17, text: "日本" },
               // { type: 23, text: "畅销榜" },
      //{ type: 21, text: "我是歌手" },
     // { type: 19, text: "摇滚" },
     // { type: 18, text: "民谣" },
              //{ type: 28, text: "网络歌曲" },
              //{ type: 36, text: "K歌金曲" }
      // { type: 22, text: "中国好歌曲" },
      //{ type: 29, text: "中国新歌声" },
      //{ type: 17, text: "日本" },
    ],
    ranks1: [
      { type: 32, text: "音乐人" }
    ],
    ranks2: [
      { type: 26, text: "热歌" }
    ],
    ranks3: [
      { type: 4, text: "流行榜" }
    ],
    ranks4: [
      { type: 23, text: "畅销榜" }
    ],
    ranks5: [
      { type: 28, text: "网络歌曲" }
    ],
    ranks6: [
      { type: 36, text: "K歌金曲" }
    ],
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})