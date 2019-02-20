// components/articleList/comp.js
import {indexModel} from '../../utils/request'
const index = new indexModel
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        articleList: Array,
        more: {
            type: String,
            value: '',
            observer: 'loadMore'
        },
        mId: Number
    },

    /**
     * 组件的初始数据
     */
    data: {
        loading: false,
        noMore: false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        loadMore () {
            // 如果正在加载, 不允许加载, 直接返回
            // 如果没有更多数据了, 也不允许去请求
            if(this.loading || this.noMore){
                return
            }
            // 此时可以进行加载, 修改状态为 true
            this.setData({
                loading: true
            })
            const mId = this.properties.mId
            const start = this.data.articleList.length
            index.getArticleList(mId, start).then(res=> {
                let combineList = this.data.articleList.concat(res.data.data)
                if(combineList.length === this.data.articleList.length) {
                    this.setData({
                        noMore: true
                    })
                }
                this.setData({
                    articleList: combineList,
                    // 加载完毕, 将锁打开
                    loading: false
                })
            })
        }
    }
})
