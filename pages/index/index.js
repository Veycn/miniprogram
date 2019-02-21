//index.js
//获取应用实例
import {indexModel} from '../../utils/request'
// random 模块生成一个长度为20的字符串, 因为相邻两次生成相同的概率极低
// 用来作为阻止连续触发下拉触底事件
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
  onLoad: function () {
    this.getData(),
    this.showLoading()
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onNav (e) {
    wx.pageScrollTo({
      scrollTop: 0
    })
    this.setData({
      mId: e.detail.index
    })
    this.getData(e.detail.index)
  },
  showLoading() {
    this.setData({
      loading: true
    })
  },
  hideLoading(){
    this.setData({
      loading: false
    })
  },
  toCatelog () {
    wx.navigateTo({
      url: "/pages/catelog/catelog"
    })
  },
  getData (mId) {
    let getArticleList = index.getArticleList(mId)
    let getMarkList = index.getMarkList(mId)
    let getRecommendInfo = index.getRecommendInfo(mId)
    Promise.all([getArticleList, getMarkList, getRecommendInfo]).then(res => {
      console.log(res[0].data.data)
      console.log(res[1].data.data)
      console.log(res[2].data.data)
      this.setData({
        ArticleList: res[0].data.data,
        MarkList: res[1].data.data,
        RecommendInfo: res[2].data.data,
      })
      this.hideLoading()
    })
  },
  onReachBottom () {
    this.setData({
      getMore: random(20)
    })
  }
})
