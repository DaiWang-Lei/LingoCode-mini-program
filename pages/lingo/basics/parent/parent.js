// pages/lingo/lingo.js
const app = getApp()
import api from '../../../../utils/util.js'


Page({

    /**
     * 页面的初始数据
     */
    data: {
        //   today: '', //今日课程
        //   todayWeek: '', //开学周期 week周 day星期
        //   theDay: '', //今日时间
        //   todayClassName: '' //今日课程班级
    },
    getToday: function(todayClassName) {
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
    onLoad: function(options) {
        let help = wx.getStorageSync('help') ? wx.getStorageSync('help') : 'none';
        let todayClassName = wx.getStorageSync('todayClassName') ? wx.getStorageSync('todayClassName') : 'none';
        this.getToday(todayClassName)
        this.setData({ help, todayClassName })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})