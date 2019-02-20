// components/like/like.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        like: Boolean
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
        onTap () {
            this.setData({
                like: !this.properties.like
            })
        }
    }
})
