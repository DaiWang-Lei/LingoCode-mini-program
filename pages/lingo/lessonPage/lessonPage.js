import { getLessonData, data } from '../../../util.js'

// pages/lingo/lingo.js
const app = getApp()

Page({
    data: {
        title: "",
        imgSrc: "",
        tip: '2',
        tips: '3',
        inner: '',
        hour: '0',
        minute: '1',
        second: '19',
        flag: false

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
    toggle() {
        this.setData({
            flag: !data.flag
        })
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})