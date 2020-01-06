export async function getLessonData(lessonId, openId) {
    await new Promise(resolve => {
        setTimeout(resolve, 1000);
    });

    return {
        tips: 5,
        tip: 1
    };
}

export const data = {
    basicsTitle: [
        { title: '零基础入门课', src: '../../images/lingo/0.png' },
        { title: '预备级课程', src: '../../images/lingo/3.png' },
        { title: '入门级课程', src: '../../images/lingo/5.png' },
        { title: '进阶级课程', src: '../../images/lingo/4.png' },
        { title: '飞跃级课程', src: '../../images/lingo/1.png' },
    ],
    advanceTitle: [
        { title: 'VR与空间编程', src: '../../images/lingo/vr.jpg' },
        { title: 'AI算法入门', src: '../../images/lingo/ai.jpg' },
        { title: '智能机器人', src: '../../images/lingo/roboot.jpg' },
        { title: '网络编程', src: '../../images/lingo/net.jpg' },
        { title: '物联网', src: '../../images/lingo/iot.jpg' }
    ]
}