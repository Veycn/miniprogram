// components/vedio/comp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        videoId: String,
        src: String,
        poster: String,
        duration: String,
        mainTitle: String
    },

    /**
     * 组件的初始数据
     */
    data: {
        showPoster: true
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onPlay() {
            this._togglePosterState()
            this._playVideo()
        },
        onStop() {
            this._togglePosterState()
            this._stopVideo()
        },
        _togglePosterState() {
            this.setData({
                showPoster: !this.data.showPoster
            })
        },
        _playVideo() {

            this.video.play()
        },
        _stopVideo() {
            this.video.seek(0)
            this.video.stop()
        },
        onvideoend() {
            this._togglePosterState()
        },
        _getvideoinfo() {
            this.video = wx.createVideoContext(this.properties.videoId, this)
        }
    },
    lifetimes: {
        attached() {
            this._getvideoinfo()
        }
    }
})
