//index.js
//获取应用实例
import {indexModel} from '../../utils/request'
import {random} from '../../utils/randomStr'
const index = new indexModel
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    getMore: '',
    mId: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getData () {
    let getArticleList = index.getArticleList()
    let getMarkList = index.getMarkList()
    let getRecommendInfo = index.getRecommendInfo()
    Promise.all([getArticleList, getMarkList, getRecommendInfo]).then(res => {
      console.log(res[0].data.data)
      console.log(res[1].data.data)
      console.log(res[2].data.data)
      this.setData({
        ArticleList: res[0].data.data,
        MarkList: res[1].data.data,
        RecommendInfo: res[2].data.data
      })
      wx.hideLoading()
    })
  },
  onLoad: function () {
    wx.showLoading()
    this.getData()
    //index.getArticleList().then( res => {console.log(res)})

    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onReachBottom () {
    this.setData({
      getMore: random(20)
    })
  }
})
