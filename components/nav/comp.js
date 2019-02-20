// components/nav/comp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        list: ["轻芒", "兴趣", "物质", "世界", "新事", "灵魂"],
        curIndex: 0,
        activeId: 'm0'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onTap (e) {
            let index = e.currentTarget.dataset.index
            this.setData({
                curIndex: index,
                activeId: `m${index === 0 ? 0 : index - 1}`
            })
        }
    }
})
