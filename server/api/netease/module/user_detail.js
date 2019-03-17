// 用户详情

module.exports = (query, request) => {
    return request(
        'POST', `https://music.163.com/weapi/v1/user/detail/${query.id}`, {},
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}