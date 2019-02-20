// components/tag/comp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tagId: Number,
        tagName: String
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        jumpto () {
            wx.navigateTo({
                url: `/pages/type/type?tagid=${this.properties.tagId}`
            })
        }
    }
})
