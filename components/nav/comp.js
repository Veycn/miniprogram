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
            let lastIndex = this.data.curIndex 
            // 将当前的 curIndex 临时保存一下, 便于比较 
            // 如果不保存, 下面设置 curIndex肯定与新的 index 相等
            // 这样就不能阻止连续点击同一个标签, 从而触发多次相同的数据请求了
            this.setData({
                curIndex: index,
                activeId: `m${index === 0 ? 0 : index - 1}`
            })
            if(lastIndex === index) return // 如果两次点击的标签一样, 不允许请求数据
            this.triggerEvent('nav', {index}, {})
        }
    }
})
