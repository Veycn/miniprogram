// components/articleList/comp.js
import {indexModel} from '../../utils/request'
const index = new indexModel
Component({
    /**
     * 组件的属性列表
     */

     // index 页面触发触底事件, 触底即发送请求获取更多数据
     // 如果触底了, 就会生成一个字符串, 传递给此组件, 通过 observer 函数: loadMore 去加载
     // 当然也可以将此组件放入一个 scroll-view 中, 通过内置的触底事件去请求新数据
    properties: {
        articleList: Array,
        more: {
            type: String,
            value: '',
            observer: 'loadMore'
        },
        mId: {
            type: Number,
            value: 0,
            observer: 'hasMoreData'
        }
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
        },
        hasMoreData (){
            this.setData({
                noMore: false
            })
        }
    }
})
