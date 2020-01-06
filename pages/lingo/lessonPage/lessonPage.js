import { getLessonData, data } from '../../../util.js'

// pages/lingo/lingo.js
const app = getApp()

Page({
    data: {
        title: "",
        imgSrc: "",
        tip: '1',
        tips: '3',
        inner: ''
    },
    async onLoad(options) {
        const lesson = data.basicsTitle[parseFloat(options.lesson)];
        const advance = data.advanceTitle[parseFloat(options.advance)]

        if (lesson) {
            this.setData({
                title: lesson.title,
                imgSrc: "../" + lesson.src
            });
        } else {
            this.setData({
                title: advance.title,
                imgSrc: "../" + advance.src
            });
        }

        // const data = await getLessonData()
        // this.setData({
        //     ...data
        // })
        this.getTips()
    },

    getTips() {
        const progress = parseInt(this.data.tip) / parseInt(this.data.tips);
        this.setData({
            inner: progress * 600
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})