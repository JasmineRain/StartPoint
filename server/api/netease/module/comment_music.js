// 歌曲评论

module.exports = (query, request) => {
    const data = {
        rid: query.id,
        limit: query.n || 25,
        offset: (query.p - 1) || 0
    };
    return request(
        'POST', `https://music.163.com/weapi/v1/resource/comments/R_SO_4_${query.id}`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
};