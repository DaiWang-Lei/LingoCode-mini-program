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
        { title: '零基础入门课', src: '/images/lingo/0.png' },
        { title: '预备级课程', src: '/images/lingo/3.png' },
        { title: '入门级课程', src: '/images/lingo/5.png' },
        { title: '进阶级课程', src: '/images/lingo/4.png' },
        { title: '飞跃级课程', src: '/images/lingo/1.png' },
    ],
    advanceTitle: [
        { title: 'VR与空间编程', src: '/images/lingo/vr.jpg' },
        { title: 'AI算法入门', src: '/images/lingo/ai.jpg' },
        { title: '智能机器人课程', src: '/images/lingo/roboot.jpg' },
        { title: '网络编程', src: '/images/lingo/net.jpg' },
        { title: '物联网', src: '/images/lingo/iot.jpg' }
    ],

    coreClass: [
        {
            zeroBasicClassInfo: [
                { title: '免费体验课', src: '/images/class/coreBasic/zeroBasis/art.jpeg', message: '这是零基础' },
                { title: '限时体验课1', src: '/images/class/coreBasic/zeroBasis/house.jpg', message: '这是零基础' },
                { title: '限时体验课2', src: '/images/class/coreBasic/zeroBasis/flower.jpeg', message: '这是零基础' },
                { title: '限时体验课3', src: '/images/class/coreBasic/zeroBasis/blueEarth.jpeg', message: '这是零基础' }
            ]
        },
        {
            prepareClassInfo: [
                { title: '愤怒的小鸟', src: '/images/class/coreBasic/zeroBasis/art.jpeg', message: '' },
                { title: '功夫熊猫', src: '/images/class/coreBasic/zeroBasis/house.jpg', message: '' },
                { title: '堡垒之夜', src: '/images/class/coreBasic/zeroBasis/flower.jpeg', message: '' },
                { title: '刺激战场', src: '/images/class/coreBasic/zeroBasis/blueEarth.jpeg', message: '' }
            ]
        },
        {
            primaryClassInfo: [
                { title: '免费体验课', src: '/images/class/coreBasic/zeroBasis/art.jpeg', message: '' },
                { title: '限时体验课1', src: '/images/class/coreBasic/zeroBasis/house.jpg', message: '' },
                { title: '限时体验课2', src: '/images/class/coreBasic/zeroBasis/flower.jpeg', message: '' },
                { title: '限时体验课3', src: '/images/class/coreBasic/zeroBasis/blueEarth.jpeg', message: '' }
            ],
        },
        {
            middleClassInfo: [
                { title: '免费体验课', src: '/images/class/coreBasic/zeroBasis/art.jpeg', message: '' },
                { title: '限时体验课1', src: '/images/class/coreBasic/zeroBasis/house.jpg', message: '' },
                { title: '限时体验课2', src: '/images/class/coreBasic/zeroBasis/flower.jpeg', message: '' },
                { title: '限时体验课3', src: '/images/class/coreBasic/zeroBasis/blueEarth.jpeg', message: '' }
            ],
        },
        {
            higherClassInfo: [
                { title: '免费体验课', src: '/images/class/coreBasic/zeroBasis/art.jpeg', message: '' },
                { title: '🔥爆抢购课1', src: '/images/class/coreBasic/zeroBasis/house.jpg', message: '' },
                { title: '🔥爆抢购课2', src: '/images/class/coreBasic/zeroBasis/flower.jpeg', message: '' },
                { title: '🔥爆抢购课3', src: '/images/class/coreBasic/zeroBasis/blueEarth.jpeg', message: '' }
            ],
        }
    ],
    advanceClass: [
        {
            VRClassInfo: [
                { title: '飞跃进阶课', src: '/images/class/coreBasic/zeroBasis/art.jpeg', message: '' },
                { title: '🔥爆抢购课1', src: '/images/class/coreBasic/zeroBasis/house.jpg', message: '' },
                { title: '🔥爆抢购课2', src: '/images/class/coreBasic/zeroBasis/flower.jpeg', message: '' },
                { title: '🔥爆抢购课3', src: '/images/class/coreBasic/zeroBasis/blueEarth.jpeg', message: '' }
            ],
        },
        {
            AIClassInfo: [
                { title: '飞跃进阶课', src: '/images/class/coreBasic/zeroBasis/art.jpeg', message: '' },
                { title: '🔥爆抢购课1', src: '/images/class/coreBasic/zeroBasis/house.jpg', message: '' },
                { title: '🔥爆抢购课2', src: '/images/class/coreBasic/zeroBasis/flower.jpeg', message: '' },
                { title: '🔥爆抢购课3', src: '/images/class/coreBasic/zeroBasis/blueEarth.jpeg', message: '' }
            ],
        },
        {
            robootClassInfo: [
                { title: '飞跃进阶课', src: '/images/class/coreBasic/zeroBasis/art.jpeg', message: '' },
                { title: '🔥爆抢购课1', src: '/images/class/coreBasic/zeroBasis/house.jpg', message: '' },
                { title: '🔥爆抢购课2', src: '/images/class/coreBasic/zeroBasis/flower.jpeg', message: '' },
                { title: '🔥爆抢购课3', src: '/images/class/coreBasic/zeroBasis/blueEarth.jpeg', message: '' }
            ],
        },
        {
            netClassInfo: [
                { title: '飞跃进阶课', src: '/images/class/coreBasic/zeroBasis/art.jpeg', message: '' },
                { title: '🔥爆抢购课1', src: '/images/class/coreBasic/zeroBasis/house.jpg', message: '' },
                { title: '🔥爆抢购课2', src: '/images/class/coreBasic/zeroBasis/flower.jpeg', message: '' },
                { title: '🔥爆抢购课3', src: '/images/class/coreBasic/zeroBasis/blueEarth.jpeg', message: '' }
            ],
        },
        {
            iotClassInfo: [
                { title: '飞跃进阶课', src: '/images/class/coreBasic/zeroBasis/art.jpeg', message: '' },
                { title: '🔥爆抢购课1', src: '/images/class/coreBasic/zeroBasis/house.jpg', message: '' },
                { title: '🔥爆抢购课2', src: '/images/class/coreBasic/zeroBasis/flower.jpeg', message: '' },
                { title: '🔥爆抢购课3', src: '/images/class/coreBasic/zeroBasis/blueEarth.jpeg', message: '' }
            ],
        }
    ]

}