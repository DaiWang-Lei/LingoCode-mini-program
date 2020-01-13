import { getLessonData, data } from '../../../util.js'
// import { }from '../../../comments/card.js'

// import class_imgSrc from '../../../images/cause/indoorCause/hose'
// pages/lingo/lingo.js
const app = getApp()

const dataClone = data;

Page({
    data: {
        title: "",
        imgSrc: "",
        tip: '3',
        tips: '4',
        inner: '',
        hour: '0',
        minute: '1',
        second: '19',
        flag: false,
        showModal: false,
        class_tip: '1',
        class_tips: '2',
        class_inner: '',
        class_data: dataClone
    },
    async onLoad(query) {

        if (query.lesson) {
            const lesson = dataClone.basicsTitle[parseFloat(query.lesson)];

            const lessonstep = dataClone.coreClass[parseFloat(query.lesson)]
            const lessonStepOn = Object.values(lessonstep)[0]

            this.setData({
                title: lesson.title,
                imgSrc: lesson.src,
                class_data: lessonStepOn
            });
        }
        else if (query.advance) {

            const advance = dataClone.advanceTitle[parseFloat(query.advance)];
            const step = dataClone.advanceClass[parseFloat(query.advance)]
            const step1 = Object.values(step)[0] 
            
            this.setData({
                title: advance.title,
                imgSrc: advance.src,
                class_data: step1


            });
        }

        this.getTips()
        this.getClassInfo()
    },
    // 总步骤
    getTips() {
        const progress = parseInt(this.data.tip) / parseInt(this.data.tips);
        this.setData({
            inner: progress * 700
        })
    },
    getClassInfo() {
        const progress = parseInt(this.data.class_tip) / parseInt(this.data.class_tips);
        this.setData({
            class_inner: progress * 400
        })
        console.log(this.data.class_inner);

    },

    // 展示模态框
    ShowModal(e) {
        this.setData({
            showModal: true
        })
    },
    // 隐藏模态框
    hideModal() {
        this.setData({
            showModal: false
        });
    },


    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})