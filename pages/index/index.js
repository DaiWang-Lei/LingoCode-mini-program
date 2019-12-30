const app = getApp()
import api from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    today: '', //今日课程
    todayWeek: '', //开学周期 week周 day星期
    theDay: '', //今日时间
    todayClassName: '', //今日课程班级,
    basicsTitle: ['家长准备课', '零基础入门课', '函数与变量', '事件与流程控制', '类型', '对接英文和python'],
    basicsImgSrc: ['../../images/tabbar/table.png', '../../images/tabbar/index@select.png', '../../images/tabbar/calendar.png', '../../images/tabbar/check.png', '../../images/tabbar/exam.png', '../../images/tabbar/lib.png',],
    advanceTitle: ['VR与空间编程', 'AI算法入门', '智能机器人课程', '网络编程', '物联网'],
    advanceImgSrc: ['../../images/tabbar/table.png', '../../images/tabbar/index@select.png', '../../images/tabbar/calendar.png', '../../images/tabbar/check.png', '../../images/tabbar/exam.png', '../../images/tabbar/lib.png',],
  },
  getToday: function (todayClassName) {
    api.getToday({
      query: {
        name: todayClassName
      },
      // success: (res) => {
      //   let today = res.data
      //   let todayWeek = api.todayInfo(res.data.startTime)
      //   this.setData({ today, todayWeek })
      // },
      // fail: (res) => {
      //   let today = 'error'
      //   this.setData({ today })
      // },
      complete: (res) => {
        let theDay = api.getDate() + api.getDay()
        this.setData({ theDay })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let help = wx.getStorageSync('help') ? wx.getStorageSync('help') : 'none';
    let todayClassName = wx.getStorageSync('todayClassName') ? wx.getStorageSync('todayClassName') : 'none';
    this.getToday(todayClassName)
    this.setData({ help, todayClassName })
  },
  // 点击跳转页面 robuta
  nextPage: function (e) {
    var id = parseInt(e.currentTarget.id)
    switch (id) {
      case 0:
        wx.navigateTo({
          url: '../lingo/basics/parent/parent'
        })
        break;
      case 1:
        wx.navigateTo({
          url: '../lingo/basics/rudiments/rudiments'
        })
        break;
      case 2:
        wx.navigateTo({
          url: '../lingo/basics/function/function'
        })
        break;
      case 3:
        wx.navigateTo({
          url: '../lingo/basics/event/event'
        })
        break;
      case 4:
        wx.navigateTo({
          url: '../lingo/basics/class/class'
        })
        break;
      case 5:
        wx.navigateTo({
          url: '../lingo/basics/python/python'
        })
        break;
    }
  },
  advanceNextPage: function (e) {
    var id = parseInt(e.currentTarget.id)
    switch (id) {
      case 0:
        wx.navigateTo({
          url: '../lingo/advance/VR/VR'
        })
        break;
      case 1:
        wx.navigateTo({
          url: '../lingo/advance/AI/AI'
        })
        break;
      case 2:
        wx.navigateTo({
          url: '../lingo/advance/roboot/roboot'
        })
        break;
      case 3:
        wx.navigateTo({
          url: '../lingo/advance/net/net'
        })
        break;
      case 4:
        wx.navigateTo({
          url: '../lingo/advance/IOT/IOT'
        })
        break;
    }
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
    wx.reLaunch({
      url: 'index'
    })
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
    return {
      title: 'Lingo凌高编程创造营',
      desc: '「凌高编程创造营」赋能你的创造力。',
      path: '/pages/index/index'
    }
  }
})