// components/more/more.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
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
        onMore () {
            let tagName = this.properties.tagName
            wx.showActionSheet({
                itemList: ['内容过期了', `内容和${tagName}不相关`, `不再显示来自${tagName}的内容`],
                success: res => {
                    const index = res.tapIndex
                    if (index == 0 || index == 1) {
                        wx.showToast({
                            title: '已提交'
                        })
                    } else {
                        wx.showModal({
                            title: '已提交',
                            content: `将不再显示来自${tagName}相关内容`,
                            showCancel: false
                        })
                    }
                }
            })
        }
    }
})
