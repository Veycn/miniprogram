class request {
    baseUrl = 'https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine';
    getData({url, methods = 'get', data = {}}) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: this.baseUrl + url,
                success: (res) => {
                    if(res.data.code === 0) {
                        resolve(res)
                    } else {
                        this._showError()
                    }
                },
                faild: (err) => {
                    reject(err)
                }
            })
        })
    }
    _showError () {
        wx.showToast({
            title: '请求错误',
            icon: 'none'
        })
    }
}

class indexModel extends request {
    getArticleList (mId=0, start=0) {
        return this.getData({
            url: `/getIndexArticleList/${mId}/${start}`
        })
    }
    getMarkList () {
        return this.getData({
            url: '/getMarkTypeList/0'
        })
    }
    getRecommendInfo () {
        return this.getData({
            url: '/getRecommendInfo/0'
        })
    }
}

export {indexModel}

