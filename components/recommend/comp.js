// components/recommend/comp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        recommend: Object
    },

    /**
     * 组件的初始数据
     */
    data: {
        date: ''
    },
    attached () {
        this.getDate()
    },
    /**
     * 组件的方法列表
     */
    methods: {
        getDate () {
            const mArr = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"]
            const dArr = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三", "二十四", "二十五", "二十六", "二十七", "二十八", "二十九", "三十", "三十一"]
            let month = mArr[new Date().getMonth()]
            let day = dArr[new Date().getDate() - 1]
            let date = `${month}月${day}日`
            this.setData({
                date: date
            })
        }
    }
})
