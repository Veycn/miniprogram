// components/nineImg/nineImg.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        imgArr: Array
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
        onTap (e) {
            const imgs = this.properties.imgArr
            const index = e.currentTarget.dataset.index
            wx.previewImage({
                urls: imgs,
                current: imgs[index]
            })
        }
    }
})
