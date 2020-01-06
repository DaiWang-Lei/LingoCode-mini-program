import { data } from '../../util.js'
const app = getApp()


Page({

    /**
     * 页面的初始数据
     */
    data: data,




    // 点击跳转页面 robuta
    nextPage: function(e) {
        var id = parseInt(e.currentTarget.id)
        switch (id) {

            case 0:
                wx.navigateTo({
                    url: '../lingo/lessonPage/lessonPage?lesson=0'
                })
                break;
            case 1:
                wx.navigateTo({
                    url: '../lingo/lessonPage/lessonPage?lesson=1'
                })
                break;
            case 2:
                wx.navigateTo({
                    url: '../lingo/lessonPage/lessonPage?lesson=2'
                })
                break;
            case 3:
                wx.navigateTo({
                    url: '../lingo/lessonPage/lessonPage?lesson=3'
                })
                break;
            case 4:
                wx.navigateTo({
                    url: '../lingo/lessonPage/lessonPage?lesson=4'
                })
                break;
        }
    },
    advanceNextPage: function(e) {
        var id = parseInt(e.currentTarget.id)
        switch (id) {
            case 0:
                wx.navigateTo({
                    url: '../lingo/lessonPage/lessonPage?advance=0'
                })
                break;
            case 1:
                wx.navigateTo({
                    url: '../lingo/lessonPage/lessonPage?advance=1'
                })
                break;
            case 2:
                wx.navigateTo({
                    url: '../lingo/lessonPage/lessonPage?advance=2'
                })
                break;
            case 3:
                wx.navigateTo({
                    url: '../lingo/lessonPage/lessonPage?advance=3'
                })
                break;
            case 4:
                wx.navigateTo({
                    url: '../lingo/lessonPage/lessonPage?advance=4'
                })
                break;
        }
    },


    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {
        return {
            title: 'Lingo凌高编程创造营',
            desc: '「凌高编程创造营」赋能你的创造力。',
            path: '/pages/index/index'
        }
    }
})